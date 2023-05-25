const express = require("express");
const route = express.Router();

const {
  localFileUploud,
  imageUpload,
  videoUpload,
  imageSizeReducer,
} = require("../controller/fileUploud");

route.post("/localFileUploud", localFileUploud);
route.post("/imageUpload", imageUpload);
route.post("/videoUpload", videoUpload);

route.post("/imageSizeReducer", imageSizeReducer);
module.exports = route;
