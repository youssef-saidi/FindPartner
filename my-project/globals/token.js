const jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');


function _encrypt(token) {
  if (!token) return false;

  var ciphertext = CryptoJS.AES.encrypt(token, process.env.CRYPTO_KEY).toString();
  return ciphertext;
}



function _decrypt(token) {
  try {

    if (!token) return false;

    var bytes = CryptoJS.AES.decrypt(token, process.env.CRYPTO_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;

  } catch (e) {
    return false;
  }
}

// create a new token
function createToken(user) {
  let scopes;
  // scopes = user.scope;
  // Sign the JWT
  const token = jwt.sign(
    {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      image:user.image,
      // deviceId: user.deviceId,
      // scope: [scopes]
    },
    process.env.PRIVATE_KEY,
    {
      algorithm: 'HS256',
      expiresIn: '183d'//Half year.
    }
  );

  return _encrypt(token);

}


function verifyToken(token) {
  try {
    token = _decrypt(token);
    if (!token) return false;
    return jwt.verify(token, process.env.PRIVATE_KEY)
  } catch (e) {
    return {
      error: e
    };
  }
}

function decodeToken(token) {
  token = _decrypt(token);
  return jwt.decode(token, process.env.PRIVATE_KEY);

}




// create a shortlife token
function createShortToken(user) {

  // let scopes;
  // scopes = user.scope;

  // Sign the JWT
  const token = jwt.sign({
    id: user.id,
    fullname: user.fullname,
    email: user.email,
    image:user.image,
    // deviceId: user.deviceId,
    // scope: [scopes]
  },
  process.env.PRIVATE_KEY,
    { algorithm: 'HS256', expiresIn: '4h' });

  return _encrypt(token);

}

function makeToken(data) {

  const token = jwt.sign(
    data,
    process.env.PRIVATE_KEY,
    { algorithm: 'HS256', expiresIn: '7200 days' } //20 years token.
  );

  return _encrypt(token);
}



const hashPassword=(password, cb)=> {

  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });

}



module.exports = {
  createToken: createToken,
  createShortToken: createShortToken,
  makeToken: makeToken,
  decodeToken: decodeToken,
  verifyToken: verifyToken,
  _encrypt: _encrypt,
  _decrypt: _decrypt,
  hashPassword: hashPassword,

};