const customPagination = (data = [], limit = 15, page = 1) => {
  const totalCount = data.length;
  const pageCount = Math.ceil(totalCount / limit);
  const currentPage = page;
  const results = data.slice((page - 1) * limit, page * limit);
  return {
    pageCount,
    totalCount,
    currentPage,
    results,
  };
};

const validate = (type, value) => {
  const nameReg = /^[a-zA-Z]([a-z A-Z]){2,}$/;
const mobileReg = /^[6789]([0-9]){9}/;
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  switch (type) {
    case "email":     
      return (value.email.trim().length > 0 && !emailReg.test(value.email))

    default:
      return
  }
}

// const nameReg = /^[a-zA-Z]([a-z A-Z]){2,}$/;
// const mobileReg = /^[6789]([0-9]){9}/;
// const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// if (!inputData.name.trim()) {
//   errors.name = "Name Required";
// } else if (!nameReg.test(inputData.name)) {
//   errors.name = "Enter a valid name";
// }
// if (!mobileReg.test(inputData.mobile)) {
//   errors.mobile = "Enter a valid mobile number";
// }
// if (inputData.email.trim().length > 0 && !emailReg.test(inputData.email)) {
//   errors.email = "Enter a valid email";
// }
// if (!inputData.productName.trim()) {
//   errors.productName = "Product Name Required";
// } else if (!nameReg.test(inputData.productName)) {
//   errors.productName = "Enter a valid Product Name";
// }

module.exports = { customPagination,validate };
