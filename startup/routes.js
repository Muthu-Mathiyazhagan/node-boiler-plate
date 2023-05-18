const error = require("../middleware/error");
const morgan = require("morgan");
const express = require("express");

const genres = require("../routes/genres");

module.exports = function (app) {
    app.use(express.json());
    app.use(morgan("dev"));
    app.use("/api/genres", genres);
    // All other Routes Comes Here
    app.use(error);
}