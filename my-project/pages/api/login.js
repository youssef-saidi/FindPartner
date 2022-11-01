import usermeta from "../../db/models/usermeta";
import users from "../../db/models/users"
import { createToken } from "../../globals/token";
const Bcrypt = require('bcrypt');
import nc from "next-connect";
import { GLobals } from "../../globals/globalFunction";

const login = nc(GLobals.onError)

login.post(async (req, res) => {
  //  const deviceId = req.headers.deviceid
  console.log(req.body)
  const { email, password } = req.body.data;

  const user = await users.findOne({
    where: {
      email: email
    }
  });
  if (user) {
    const compare = await Bcrypt.compare(password, user.password);

    if (!compare) return res.status(200).json({
      status: false,
      errors: 'invalid email or password1'
    });

    const userImage = await usermeta.findOne({
      where: {
        userId: user.id,
        metaKey: "image"
      }
    });
    let _user = {};
    _user.id = user.id;
    _user.user_email = user.email;
    _user.fullname = user.fullname;
    _user.image = userImage.dataValues.metaValue;
    // _user.deviceId = deviceId;


    const Newtoken = createToken(_user);


    res.status(200).json({ status: true, token: Newtoken })
  } else {


    res.status(200).json({
      status: false,
      errors: 'invalid email or password2'
    })
  }




});
export default login;
