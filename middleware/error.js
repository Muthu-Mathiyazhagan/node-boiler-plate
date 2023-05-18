require('express-async-errors');

module.exports = function (err, req, res, next) {
  //Log the Error
  console.log("verbose", err.message, err);
  return res.status(500).send(`Something went wrong! : \n ${err}`);
};
