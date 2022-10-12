import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
const bcrypt = require('bcrypt');
// import Cache from "./Storage.js";
import Axios from 'axios';

const TokenKey='_find_partner_ugid'




const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const hashPassword=(password, cb)=> {

    // Generate a salt at level 10 strength
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        return cb(err, hash);
      });
    });
  
  }


export const GLobals ={
    url:process.env.APP_URL,
    university:["IssatSO,Eniso"],
    branch:["Prepa","Licence","Cycle ingenieur","master"],
    sexe:["Men","Women","Other.."],
    TokenKey: TokenKey,
    // Token: Cache.get(TokenKey),
	Axios: () => {
		let axios = Axios.create({
			timeout: 30000,
			// withCredentials: true,
		});
		// axios.defaults.headers.deviceId = Globals.deviceId
		axios.defaults.headers.token = Cache.get(TokenKey)
		return axios;
	},

    validateEmail:validateEmail,
    hashPassword: hashPassword,


    // deviceId:getFingerprint()

}