
import bcrypt from 'bcrypt';
// const bcrypt = require("bcrypt");
const saltRounds = 10;  //  Data processing speed

// bcrypt.hash(password, saltRounds, function(err, hash) { // Salt + Hash
//   bcrypt.compare(password2, hash, function(err, result) {  // Compare
//     // if passwords match
//     if (result) {
//           console.log("It matches!")
//     }
//     // if passwords do not match
//     else {
//           console.log("Invalid password!");
//     }
//   });
// });

function hash(password) { bcrypt.hashSync(password, saltRounds);}
function compare(password1, password2) { bcrypt.compareSync(password1, hash(password2));}

// export { hash, compare }

module.exports = { hash, compare}