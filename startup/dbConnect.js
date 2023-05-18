const mongoose = require("mongoose");
const config = require('config')
const DbStatus = ["Disconnected", "Connected", "connecting", "disconnecting"];
require("dotenv").config();



module.exports = function () {

    mongoose
        .connect(config.get('mongoDBUri') , { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(
                "Mongo DB Conection Status : ",
                DbStatus[mongoose.connection.readyState]
            );
            console.log(new Date().toLocaleString("ta-IN"));
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });

}