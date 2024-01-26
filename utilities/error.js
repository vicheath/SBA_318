const express =  require('express')
const error = express.Error()

error.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource Not Found" });
});

function error(status, msg) {
    var err = new Error(msg);
    err.status = status;
    return err;
  }
  
  module.exports = error;