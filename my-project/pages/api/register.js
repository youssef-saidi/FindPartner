import users from "../../db/models/users"
import { createToken, decodeToken, hashPassword } from "../../globals/token";
import _ from 'lodash';
import { GLobals } from "../../globals/globalFunction";
import usermeta from "../../db/models/usermeta";
import nc from "next-connect";
import multer from "multer";



const register = nc();
// Multer configuration (upload image)
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(
      null,
      Math.round(Math.random() * 1E9) + "-" + Date.now() + file.originalname
    );
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("file");
register.use(uploadFile);


register.post(async (req, res) => {
  // const deviceId = req.headers.deviceId

  const { fullname, email, password, faculty } =JSON.parse(req.body.data) ;

  const filename = _.isUndefined(req.file) ? "/image/noImage.jpg" : "/upload/" + req.file.filename;

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
        await usermeta.create({ metaKey: "image", metValue: filename, userId: createUser.dataValues.id })

        let _user = {};
        _user.id = createUser.dataValues.id;
        _user.email = email;
        _user.fullname = fullname;
        _user.image = filename;

        // _user.deviceId = deviceId;
        const Newtoken = createToken(_user);


        res.status(200).json({ status: true, token: Newtoken,decode:decodeToken(Newtoken) })

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


});




export default register;


export const config = {
  api: {
    bodyParser: false,
  },
};