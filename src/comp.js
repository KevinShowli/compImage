const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

const compImg = async function (file) {
  let compfile = await imagemin([`public/images/${file}`], {
    destination: "public/compressed-images",
    plugins: [imageminWebp({ quality: 50 })],
  });
  return compfile;
};

module.exports = compImg;