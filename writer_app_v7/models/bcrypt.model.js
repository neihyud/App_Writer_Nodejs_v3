const bcrypt = require('bcrypt');
const saltRounds = 10

module.exports.hash = (password) => {
    return bcrypt.hashSync(password, saltRounds)
}

module.exports.comparePass = (password, password2) => {
    return bcrypt.compareSync(password, password2);
}