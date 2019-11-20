
var userSchema = require('../module/user');

const User = mongoose.model('User', userSchema.user);
let user = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, result) => {
    if (err) {
      var errorArray = [];
      _.forEach(Object.keys(err.errors), (row) => {
        errorArray.push({ "field": err.errors[row].message ? err.errors[row].message : "please check input" });
      });
      if (_.size(Object.keys(err.errors)) == _.size(errorArray)) {
        return res.send({ message: "error in save", errorType: errorArray });
      }
    }
    return res.send({ message: "one record inserted" });
  });
}



module.exports = {
  user
} 
