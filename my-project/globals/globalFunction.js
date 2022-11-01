// import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import Storage from "./Storage.js";
import Axios from 'axios';

const TokenKey = '_find_partner_ugid'




const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);




export const GLobals = {
  url: process.env.APP_URL,
  university: ["IssatSo", "Eniso"],
  branch: ["Prepa", "Licence", "Cycle ingenieur", "Master"],
  sexe: ["Men", "Women", "Other.."],
  TokenKey: TokenKey,
  Token: Storage.get(TokenKey),
  Storage: Storage,
  Axios: () => {
    let axios = Axios.create({
      timeout: 30000,
      // withCredentials: true,
    });
    // axios.defaults.headers.deviceId = Globals.deviceId
    axios.defaults.headers.token = Storage.get(TokenKey)
    return axios;
  },

  validateEmail: validateEmail,
  loginChangeHandler: (cb) => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {

        if (e.key === TokenKey) {

          if (e.newValue === null || e.newValue.length === 0 ||e.newValue === undefined ) {
            cb();
            // window.location.reload();
          }
        }
      });
    }
  },
  onError: (err, req, res, next)=> {
    console.error(err);
    console.log("hi")
    res.status(500).end({error:err.toString()});
    next()
  }


  // deviceId:getFingerprint()

}