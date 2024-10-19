// const multer = require("multer");
// const path = require("path");

// // Define the base directory
// global.__basedir = path.join(__dirname, "..");

// const excelFilter = (req, file, cb) => {
//   console.log("excel filter executed");
//   if (
//     file.mimetype.includes("excel") ||
//     file.mimetype.includes("spreadsheetml") ||
//     file.mimetype.includes("text/csv")
//   ) {
//     cb(null, true);
//   } else {
//     cb(
//       new Error("Please upload only excel file with format:(.xlsx / .csv)"),
//       false
//     );
//   }
// };
// console.log(__basedir, "__basedir");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("destination function executed");
//     cb(null, path.join(__basedir, "uploads", "ExcelSheets"));
//   },
//   filename: (req, file, cb) => {
//     console.log("filename function executed");
//     cb(null, `prs-${file.originalname}`);
//   }
// });

// console.log(storage, "storage");
// const uploadFile = multer({ storage: storage, fileFilter: excelFilter });
// console.log("Multer middleware initialized");
// module.exports = uploadFile;

const multer = require("multer");
global.__basedir = __dirname + "/..";

const excelFilter = async (req, file, cb) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml") ||
    file.mimetype.includes("text/csv")
  ) {
    cb(null, true);
  } else {
    cb(`Please upload only excel file with format:(.xslx / .csv)`, false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("this called");
    cb(null, __basedir + "/uploads/ExcelSheets/");
  },
  filename: (req, file, cb) => {
    cb(null, `vb-${file.originalname}`);
  }
});

const uploadFile = multer({ storage: storage, fileFilter: excelFilter });

module.exports = uploadFile;
