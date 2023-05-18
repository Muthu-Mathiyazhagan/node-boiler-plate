const express = require("express");
const app = express();


require('./startup/routes')(app);
require('./startup/dbConnect')();
require('./startup/caughtErrors')();

const port = process.env.VIDLY_PORT || 3000; //Get the PORT value from env file
app.listen(port, () => console.log(`Listening  On http://localhost:${port}`));