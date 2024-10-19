const customerModal = require("../model/customer");
// global.__basedir = __dirname + "/..";
const csv = require("csvtojson");
const path = require("path");

// POST //
const storeCustomer = async (req, res) => {
  try {
    const data = req.body;
    const customer = new customerModal(req.body);
    const createCustomer = await customer.save();
    res.status(201).send(createCustomer);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getCustomer = async (req, res) => {
  try {
    const customerData = await customerModal.find();
    customerData.sort((a, b) =>
      a.time < b.time ? 1 : b.time < a.time ? -1 : 0
    );
    res.send(customerData);
  } catch (e) {
    res.send(e);
  }
};

const getCustomerDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const customerData = await customerModal.findById(_id);
    if (!customerData) {
      return res.status(404).send();
    } else {
      res.send(customerData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE customer DATA //
const updateCustomer = async (req, res) => {
  try {
    const data = req.body;
    const _id = req.params.id;
    const updateCustomer = await customerModal.findByIdAndUpdate(_id, data, {
      new: true
    });

    res.send(updateCustomer);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE customer DATA //
const deleteCustomer = async (req, res) => {
  try {
    const deleteCustomer = await customerModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteCustomer);
  } catch (e) {
    res.status(404).send(e);
  }
};

const createCustomerWithImport = async (req, res) => {
  res.send("uploaded!!");
  // try {
  //   let UsersResult = [];
  //   let importError = [];
  //   let successImportData = [];
  //   if (req.files.file === undefined) {
  //     return res.status(400).send("Please upload an excel/csv file!");
  //   }
  //   let formattedPath = path.join(
  //     __basedir,
  //     "uploads",
  //     "ExcelSheets",
  //     req.files.file.name
  //   );
  //   console.log(formattedPath, "formattedPath");
  //   let fileData;
  //   console.log(req.files.file.mimetype, "req.files.file.mimetype");
  //   if (req.files.file.mimetype.includes("text/csv")) {
  //     /**
  //      * For CSV File
  //      */
  //     fileData = await csv().fromFile(formattedPath);
  //     console.log(fileData, "fileData");
  //     for (let cust of fileData) {
  //       // let userData = {
  //       //   firstName: cust.firstName,
  //       //   surname: cust.surname,
  //       //   email: cust.email,
  //       //   organization: orgId,
  //       //   password: randomPassword,
  //       //   role: getUserRoleId._id.toString(),
  //       //   reportingManager: await getReportingManager(
  //       //     cust?.reportingManager,
  //       //     cust?.managerEmail
  //       //   ),
  //       //   avatar: getAvatar,
  //       // };
  //       /**
  //        * create user also handle errors
  //        */
  //       try {
  //         const result = new User(cust);
  //         await result.save();
  //         UsersResult.push({ index: i, message: result.email });
  //       } catch (err) {
  //         importError.push({
  //           index: i,
  //           message: err
  //         });
  //       }
  //     }
  //   } else {
  //     /**
  //      * For Excel File. .xlsx
  //      */
  //     // fileData = await readXlsxFile(path);
  //     // fileData.shift();
  //     // for (let k = 0; k < fileData.length; k++) {
  //     //   let randomPassword = nanoid(10);
  //     //   let userData = {
  //     //     firstName: fileData[k][0],
  //     //     surname: fileData[k][1],
  //     //     email: fileData[k][2],
  //     //     organization: orgId,
  //     //     password: randomPassword,
  //     //     role: getUserRoleId._id.toString(),
  //     //     reportingManager: await getReportingManager(
  //     //       fileData[k][3],
  //     //       fileData[k][4]
  //     //     ),
  //     //     avatar: getAvatar,
  //     //   };

  //     //   try {
  //     //     const result = new User(userData);
  //     //     await result.save();
  //     //     /**
  //     //      * Add User in Who Reports Me Array
  //     //      */
  //     //     UsersResult.push({ index: k, message: result.email });
  //     //   } catch (err) {
  //     //     importError.push({
  //     //       index: k,
  //     //       message: err,
  //     //     });
  //     //   }
  //     // }
  //     res.status(400).send("CSV file not found");
  //   }
  // } catch (e) {
  //   console.log(e, "e");
  //   res.status(404).send(e);
  // }
};

// EXPORT //
module.exports = {
  storeCustomer,
  getCustomer,
  getCustomerDetail,
  updateCustomer,
  deleteCustomer,
  createCustomerWithImport
};
