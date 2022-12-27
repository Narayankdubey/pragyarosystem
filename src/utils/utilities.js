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
  switch (type) {
    case "email":
      // return value.match(
      //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      // );
      return true

    default:
      return
  }
}

module.exports = { customPagination,validate };
