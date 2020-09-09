var express = require("express");
var router = express.Router();
var multer = require("multer");
const path = require("path");
const compImg = require("../src/comp");
let filename = "";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    let exname = path.extname(file.originalname);
    filename = file.fieldname + "-" + Date.now() + exname;
    cb(null, filename);
  },
});
var upload = multer({ storage: storage });

router.post("/webp/compImg", upload.single("file"), async (req, res, next) => {
  let compfile = await compImg(filename);
  let data = [];
  compfile.map(el => {
    let buffer = Buffer.from(el.data, "utf-8");
    let base64Str = buffer.toString("base64");
    console.log(base64Str);
    return data.push(base64Str);
  });
  res.send({
    code: 200,
    data,
    msg: "ok",
  });
});

module.exports = router;
