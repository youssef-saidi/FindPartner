import users from "../../db/models/users"
import { createToken ,hashPassword} from "../../globals/token";
import _ from 'lodash';
import { GLobals } from "../../globals/globalFunction";
import usermeta from "../../db/models/usermeta";



export default async function register(req, res) {
  if (req.method === 'POST') {
    const deviceId = req.headers.deviceId
    const { fullname, email, password, faculty } = req.body;
    // console.log(GLobals.deviceId)
    let errors = [];

    if (_.isEmpty(fullname)) errors = [...errors, { fullname: "required fullname" }]
    if (_.isEmpty(password)) errors = [...errors, { password: "required password" }]
    if (_.isEmpty(email) && !GLobals.validateEmail(email)) errors = [...errors, { email: "invalid email" }]

    if (!_.isEmpty(errors)) {
      res.status(200).json({
        status: false,
        errors: errors
      });
    }

    const user = await users.findOne({
      where: {
        email: email
      }
    });

    if (_.isEmpty(user)) {
      
      hashPassword(password, async (hashError, passHash) => {

        if (hashError) {
          res.status(200).json({
            status: false,
            errors: ['Something went wrong please try again later.']
          });
        }



        const createUser = await users.create({
          fullname: fullname,
          password: passHash,
          email: email
        })

        if (!_.isEmpty(createUser)) {
          await usermeta.create({ metaKey: "faculty", metValue: faculty, userId: createUser.dataValues.id })
          let _user = {};
          _user.id = createUser.dataValues.id;
          _user.email = email;
          _user.fullname=fullname
          // _user.deviceId = deviceId;
          const Newtoken = createToken(_user);


          res.status(200).json({ status: true, token: Newtoken })

        } else {
          res.status(200).json({
            status: false,
            errors: ['Something went wrong please try again later2.']
          });
        }

      });


    } else {
      res.status(200).json({
        status: false, errors: 'Email is used '
      })
    }
  } else {
    res.status(400).json({
      status: false, errors: 'Something went wrong please try again later.'
    })

  }




}
