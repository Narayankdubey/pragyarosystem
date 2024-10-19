const express = require("express");
const uploadFile = require("./utils/upload");

const Router = express.Router();

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
  deleteAdmin
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
  deleteUser
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
  deleteVisitor
} = require("./controller/visitorController");

Router.post("/visitors", storeVisitor);
Router.get("/visitors", isAuthorized, getVisitors);
Router.get("/visitors/:id", isAuthorized, getVisitorDetail);
Router.patch("/visitors/:id", isAuthorized, updateVisitor);
Router.delete("/visitors/:id", isAuthorized, deleteVisitor);

//////// UNKNOWN VISITOR  ///////

const {
  storeUnKnownVisitor,
  getUnKnownVisitors,
  getUnKnownVisitorDetail,
  updateUnKnownVisitor,
  deleteUnKnownVisitor
} = require("./controller/unKnownVisitorController");
Router.post("/unknownvisitors", storeUnKnownVisitor);
Router.get("/unknownvisitors", isAuthorized, getUnKnownVisitors);
Router.get("/unknownvisitors/:id", isAuthorized, getUnKnownVisitorDetail);
Router.patch("/unknownvisitors/:id", isAuthorized, updateUnKnownVisitor);
Router.delete("/unknownvisitors/:id", isAuthorized, deleteUnKnownVisitor);

///////////  PRODUCTS  /////////

const {
  storeProducts,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
  filterElements,
  searchSuggestion
} = require("./controller/productsController");

// Router.post("/products", isAuthorized, upload.single("img"), storeProducts);
Router.post("/products", isAuthorized, storeProducts);
Router.get("/products", getProducts);
Router.get("/products/:id", getproductDetail);
// Router.get("/search-product/", searchProductEmpty);
Router.get("/search-product", searchSuggestion);
Router.patch("/products/:id", isAuthorized, updateProduct);
Router.delete("/products/:id", isAuthorized, deleteProduct);
Router.get("/filterElemets", filterElements);

///////////  CONTACT US  /////////

const {
  storeContactUs,
  getContactUs,
  getContactUsDetail,
  updateContactUs,
  deleteContactUs,
  sendEmails
} = require("./controller/contactUsController");

// Router.post("/products", isAuthorized, upload.single("img"), storeProducts);
Router.post("/api-contactus", storeContactUs);
Router.get("/api-contactus", isAuthorized, getContactUs);
Router.get("/api-contactus/:id", isAuthorized, getContactUsDetail);
Router.patch("/api-contactus/:id", isAuthorized, updateContactUs);
Router.delete("/api-contactus/:id", isAuthorized, deleteContactUs);
Router.post("/sendallemails", isAuthorized, sendEmails);

///////////  SERVICE  /////////

const {
  storeService,
  getService,
  getServiceDetail,
  updateService,
  deleteService
} = require("./controller/serviceController");

// Router.post("/products", isAuthorized, upload.single("img"), storeProducts);
Router.post("/service", storeService);
Router.get("/service", isAuthorized, getService);
Router.get("/service/:id", isAuthorized, getServiceDetail);
Router.patch("/service/:id", isAuthorized, updateService);
Router.delete("/service/:id", isAuthorized, deleteService);

////////  REVIEW  ///////

const {
  storeReview,
  getAllReviews,
  getReviews,
  getReviewDetail,
  updateReview,
  deleteReview,
  increaseReviewLike
} = require("./controller/reviewController");

Router.post("/review", storeReview);
Router.get("/review/:id", getReviews);
Router.get("/one-review/:id", getReviewDetail);
Router.get("/all-review", getAllReviews);
Router.patch("/review/:id", updateReview);
Router.delete("/review/:id", deleteReview);
Router.post("/review/like/:id", increaseReviewLike);

///////////  C U S T O M E R  /////////

const {
  storeCustomer,
  getCustomer,
  getCustomerDetail,
  updateCustomer,
  deleteCustomer,
  createCustomerWithImport
} = require("./controller/customerController");

Router.post("/customer", storeCustomer);
Router.get("/customer", getCustomer);
Router.get("/customer/:id", isAuthorized, getCustomerDetail);
Router.patch("/customer/:id", isAuthorized, updateCustomer);
Router.delete("/customer/:id", isAuthorized, deleteCustomer);
// Router.post(
//   "/import-customers",
//   uploadFile.single("file"),
//   createCustomerWithImport
// );
Router.post(
  "/import-customers",
  [uploadFile.single("file")],
  createCustomerWithImport
);

module.exports = Router;
