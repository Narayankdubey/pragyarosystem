const express = require("express");

const Router = express.Router();
const path = require("path");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const productModal = require("./model/product");

// const upload = multer({
//   limits: {
//     fileSize: 1000000, // max file size 1MB = 1000000 bytes
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
//       cb(new Error("only upload files with jpg or jpeg format."));
//     }
//     cb(undefined, true); // continue with upload
//   },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file.originalname, "*********got file original name*********");
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

///////// LOGIN - LOGOUT //////////

const { logIn, logOut } = require("./loginLogout");

Router.post("/login", logIn);
Router.get("/logout", logOut);

const { isAuthorized } = require("./auth");

////////  ADMIN  ///////

const {
  storeAdmin,
  getAdmins,
  getAdminDetail,
  updateAdmin,
  deleteAdmin,
} = require("./controller/adminController");

Router.post("/admins", isAuthorized, storeAdmin);
Router.get("/admins", isAuthorized, getAdmins);
Router.get("/admins/:id", getAdminDetail);
Router.patch("/admins/:id", updateAdmin);
Router.delete("/admins/:id", deleteAdmin);

////////  USER  ///////

const {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
} = require("./controller/userController");

Router.post("/users", storeUser);
Router.get("/users", isAuthorized, getUsers);
Router.get("/users/:id", getuserDetail);
Router.patch("/users/:id", updateuser);
Router.delete("/users/:id", deleteUser);

////////  VISITOR  ///////

const {
  storeVisitor,
  getVisitors,
  getVisitorDetail,
  updateVisitor,
  deleteVisitor,
} = require("./controller/visitorController");

Router.post("/visitors", storeVisitor);
Router.get("/visitors", isAuthorized, getVisitors);
Router.get("/visitors/:id", getVisitorDetail);
Router.patch("/visitors/:id", updateVisitor);
Router.delete("/visitors/:id", deleteVisitor);

///////////  PRODUCTS  /////////

const {
  storeProducts,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
  filterElements,
  searchSuggestion,
} = require("./controller/productsController");

// Router.post("/products", isAuthorized, upload.single("img"), storeProducts);
Router.post("/products", isAuthorized, storeProducts);
Router.get("/products", getProducts);
Router.get("/products/:id", getproductDetail);
// Router.get("/search-product/", searchProductEmpty);
Router.get("/search-product", searchSuggestion);
Router.patch("/products/:id",isAuthorized, updateProduct);
Router.delete("/products/:id", isAuthorized, deleteProduct);
Router.get("/filterElemets", filterElements);

///////////  CONTACT US  /////////

const {
  storeContactUs,
  getContactUs,
  getContactUsDetail,
  updateContactUs,
  deleteContactUs,
} = require("./controller/contactUsController");

// Router.post("/products", isAuthorized, upload.single("img"), storeProducts);
Router.post("/api-contactus", storeContactUs);
Router.get("/api-contactus", isAuthorized, getContactUs);
Router.get("/api-contactus/:id", getContactUsDetail);
Router.patch("/api-contactus/:id", updateContactUs);
Router.delete("/api-contactus/:id", deleteContactUs);

// ////////  ROLES  /////////

// const {
//   storeRoles,
//   getRoles,
//   getroleDetail,
//   updateRole,
//   deleteRole,
// } = require("./controller/roleController");

// Router.post("/roles", storeRoles);
// Router.get("/roles", getRoles);
// Router.get("/roles/:id", getroleDetail);
// Router.patch("/roles/:id", updateRole);
// Router.delete("/roles/:id", deleteRole);

// ///////  CATEGORIES  ///////////

// const {
//   storeCategories,
//   getCategories,
//   getcategoriesDetail,
//   updatecategories,
//   deletecategories,
// } = require("./controller/categoriesController");

// Router.post("/categories", storeCategories);
// Router.get("/categories", getCategories);
// Router.get("/categories/:id", getcategoriesDetail);
// Router.patch("/categories/:id", updatecategories);
// Router.delete("/categories/:id", deletecategories);

// /////////  TAGS  /////////////

// const {
//   storeTags,
//   getTags,
//   gettagDetail,
//   updateTag,
//   deleteTag,
// } = require("./controller/tagController");

// Router.post("/tags", storeTags);
// Router.get("/tags", getTags);
// Router.get("/tags/:id", gettagDetail);
// Router.patch("/tags/:id", updateTag);
// Router.delete("/tags/:id", deleteTag);

// ///////////  CARTS  ///////////

// const {
//   storeCarts,
//   getCarts,
//   getcartDetail,
//   updateCart,
//   deleteCart,
// } = require("./controller/cartsController");

// Router.post("/carts", storeCarts);
// Router.get("/carts", getCarts);
// Router.get("/carts/:id", getcartDetail);
// Router.patch("/carts/:id", updateCart);
// Router.delete("/carts/:id", deleteCart);

// //////////  ORDERS  ///////////

// const {
//   storeOrders,
//   getOrders,
//   getorderDetail,
//   updateOrder,
//   deleteOrder,
// } = require("./controller/orderController");

// Router.post("/orders", storeOrders);
// Router.get("/orders", getOrders);
// Router.get("/orders/:id", getorderDetail);
// Router.patch("/orders/:id", updateOrder);
// Router.delete("/orders/:id", deleteOrder);

/////// Exporting Router  /////////

module.exports = Router;
