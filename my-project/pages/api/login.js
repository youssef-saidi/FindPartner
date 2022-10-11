import users from "../../db/models/users"
import { createToken } from "../../globals/token";
const Bcrypt = require('bcrypt');


export default async function login(req, res) {
  if (req.method === 'POST') {
    const deviceId = req.headers.deviceid
    const { email, password } = req.body;


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
      let _user = {};
      _user.id = user.id;
      _user.user_email = user.email;
      // _user.deviceId = deviceId;


      const Newtoken = createToken(_user);


      res.status(200).json({ status: true, token: Newtoken })
    } else {


      res.status(200).json({
        status: false,
        errors: 'invalid email or password2'
      })
    }

  } else {
    res.status(400).json({
      status: false, errors: 'Something went wrong please try again later.'
    })

  }


}
