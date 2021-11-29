require("dotenv").config();
const app = require('express')();
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
  };