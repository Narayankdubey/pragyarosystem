const res = require("express/lib/response");
const productModal = require("../model/product");
const reviewModal = require("../model/review");
const { customPagination } = require("../utils/utilities");

var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "narayankdubey2",
  api_key: "226617943314338",
  api_secret: "6zIrDfS1ri73ATeS1gai2MErnJ8",
  secure: true,
});

async function uploadToCloudinary(file) {
  return cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    imgPath = result.url;
    return result.url;
  });
}

// Function to set filter data //
const setFilterData = (tempQuery) => {
  let finalQuery = {};
  for (let key in tempQuery) {
    if (tempQuery[key].length > 0) {
      if (typeof tempQuery[key][0] === "object") {
        let tempArr = [];
        tempQuery[key].forEach((element) => {
          tempArr.push({ [key]: { $gte: element.min, $lte: element.max } });
          // tempArr.push({ [key]:  });
        });
        let q = { $and: [{ $or: tempArr }] };
        finalQuery = { ...finalQuery, ...q };
      } else {
        let q = { [key]: { $in: tempQuery[key] } };
        finalQuery = { ...finalQuery, ...q };
      }
    }
  }
  return finalQuery;
};

// POST //
const storeProducts = async (req, res) => {
  try {
    let imgPath;
    const file = req.files.img;

    const product_name = req.body.product_name;
    const color = req.body.color;
    const capacity = req.body.capacity;
    const purifying_technology = req.body.purifying_technology;
    const booster_pump = req.body.booster_pump;
    const voltage = req.body.voltage;
    const price = req.body.price;
    const imgData = await uploadToCloudinary(file);
    const img = imgData.url;
    const cloudinary_id = imgData.public_id;

    const product_data = {
      product_name,
      color,
      capacity,
      purifying_technology,
      booster_pump,
      voltage,
      price,
      img,
      cloudinary_id,
    };

    product = new productModal(product_data);
    const createProduct = await product.save();
    res.status(201).send(createProduct);
  } catch (e) {
    res.status(400).send("not successfull");
  }
};

// GET RATING FOR EACH PRODUCT //

const getAllRatings = async (rawData = []) => {
  const data = JSON.parse(JSON.stringify(rawData));
  if (data && data.length <= 0) {
    return [];
  }
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item?._id) {
      const reviewData = await reviewModal.find({ productId: item?._id });
      let reviewStats = {
        total: reviewData.length,
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
        average: 0,
      };
      let sum = 0;
      for (let element of reviewData) {
        sum = sum + element.rating;
        switch (element.rating) {
          case 1:
            reviewStats[1] = reviewStats[1] + 1;
            break;
          case 2:
            reviewStats[2] = reviewStats[2] + 1;
            break;
          case 3:
            reviewStats[3] = reviewStats[3] + 1;
            break;
          case 4:
            reviewStats[4] = reviewStats[4] + 1;
            break;
          case 5:
            reviewStats[5] = reviewStats[5] + 1;
            break;
          default:
            break;
        }
      }
      reviewStats.average = Math.round(sum / reviewData.length || 0, 1);
      data[i].reviewDetails = reviewStats;
    }
  }
  return data;
};

// GET ALL DATA //
const getProducts = async (req, res) => {
  try {
    const decodedFilter = decodeURIComponent(req.query.filterQuery || "%7B%7D");
    const parsedFilter = JSON.parse(decodedFilter);
    const finalQuery = setFilterData(parsedFilter);
    const query = req.query.search || "";
    const sortData = req.query.sort || "product_name";
    const sortOrder = req.query.sortOrder || 1;
    const page = Math.max(0, parseInt(req.query.page) || 1);
    const limit = parseInt(req.query.limit) || 5;
    const regex = new RegExp(query, "i");

    const searchQuery = {
      $or: [
        { product_name: [regex] },
        { color: [regex] },
        { purifying_technology: [regex] },
        { booster_pump: [regex] },
        // { capacity: [regex] },
        // { voltage: [regex] },
        // { price: [regex] },
      ],
    };
    if (finalQuery.hasOwnProperty("$and")) {
      finalQuery.$and.push(searchQuery);
    } else {
      let q = { $and: [searchQuery] };
      Object.assign(finalQuery, q);
    }
    const productData = await productModal
      .find(finalQuery)
      .sort({ [sortData]: sortOrder });
    // const dataWithRating = await getAllRatings(productData);
    const resultData = customPagination(productData, limit, page);
    res.status(201).send(resultData);
  } catch (e) {
    res.send(e);
  }
};

// GET RATING FOR EACH PRODUCT //

const getRatings = async (rawData = {}) => {
  const item = JSON.parse(JSON.stringify(rawData));
  if (item?._id) {
    const reviewData = await reviewModal.find({ productId: item?._id });
    let reviewStats = {
      total: reviewData.length,
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
      average: 0,
      reviewCount: 0,
    };
    let sum = 0;
    for (let element of reviewData) {
      sum = sum + element.rating;
      switch (element.rating) {
        case 1:
          reviewStats[1] = reviewStats[1] + 1;
          break;
        case 2:
          reviewStats[2] = reviewStats[2] + 1;
          break;
        case 3:
          reviewStats[3] = reviewStats[3] + 1;
          break;
        case 4:
          reviewStats[4] = reviewStats[4] + 1;
          break;
        case 5:
          reviewStats[5] = reviewStats[5] + 1;
          break;
        default:
          break;
      }
      if (element.review && element.review.length > 0) {
        reviewStats.reviewCount = reviewStats.reviewCount + 1;
      }
    }
    reviewStats.average = Math.round(sum / reviewData.length || 0, 1);
    item.reviewDetails = reviewStats;
  }
  return item;
};

// GET DATA BY ID //
const getproductDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const productData = await productModal.findById(_id);
    if (!productData) {
      return res.status(404).send();
    } else {
      // const dataWithRating = await getRatings(productData);
      res.send(productData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE DATA //
const updateProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateProducts = await productModal.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateProducts);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE DATA //
const deleteProduct = async (req, res) => {
  try {
    let product = await productModal.findById(req.params.id);
    if ("cloudinary_id" in product) {
      await cloudinary.uploader.destroy(product.cloudinary_id);
    }

    const deleteProduct = await productModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteProduct);
  } catch (e) {
    res.status(404).send(e);
  }
};

// Function to get range value
const getRangeArray = (min, max) => {
  const range = max >= min ? max - min : 0;
  const numOfDigits = max.toString().length;
  const ceilDiff = Math.ceil(range / 10);
  let diffence = ceilDiff <= 5 ? 5 : Math.pow(10, numOfDigits - 2);
  let arr = [min];

  for (let i = min + 1; i < max; i++) {
    if (i % diffence === 0) {
      arr.push(i);
    }
  }
  arr.push(max);

  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (i === 1) {
      newArr.push({ ["min"]: arr[i - 1], ["max"]: arr[i] });
    } else {
      newArr.push({ ["min"]: arr[i - 1] + 1, ["max"]: arr[i] });
    }
  }
  return newArr;
};

// Filter data for filter page
const filterElements = async (req, res) => {
  try {
    let finalQuery = setFilterData(
      JSON.parse(decodeURIComponent(req.query.filterQuery || "%7B%7D"))
    );

    let filteredElements = await productModal.find(finalQuery);

    const uniqueColors = [
      ...new Set(filteredElements.map((item) => item.color)),
    ];
    const uniqueCapacity = [
      ...new Set(filteredElements.map((item) => item.capacity)),
    ];
    const minCapacity = Math.min.apply(null, uniqueCapacity);
    const maxCapacity = Math.max.apply(null, uniqueCapacity);
    const capcityRange = getRangeArray(minCapacity, maxCapacity);
    const uniquePurifyingTech = [
      ...new Set(
        filteredElements.map((item) => item.purifying_technology.trim())
      ),
    ];
    const uniqueBoosterPump = [
      ...new Set(filteredElements.map((item) => item.booster_pump)),
    ];
    const uniqueVoltage = [
      ...new Set(filteredElements.map((item) => item.voltage)),
    ];
    const minVoltage = Math.min.apply(null, uniqueVoltage);
    const maxVoltage = Math.max.apply(null, uniqueVoltage);
    const voltageRange = getRangeArray(minVoltage, maxVoltage);
    const uniquePrice = [
      ...new Set(filteredElements.map((item) => item.price)),
    ];
    const minPrice = Math.min.apply(null, uniquePrice);
    const maxPrice = Math.max.apply(null, uniquePrice);
    const priceRange = getRangeArray(minPrice, maxPrice);

    const finalElement = {
      ["uniqueColors"]: uniqueColors,
      ["capcityRange"]: capcityRange,
      ["uniquePurifyingTech"]: uniquePurifyingTech,
      ["uniqueBoosterPump"]: uniqueBoosterPump,
      ["voltageRange"]: voltageRange,
      ["priceRange"]: priceRange,
    };
    res.status(200).send(finalElement);
  } catch (e) {
    res.status(404).send(e);
  }
};

//Search suggestion
const searchSuggestion = async (req, res) => {
  try {
    console.log("entered");
    const searchWord = req.query.search;
    const regex = new RegExp(searchWord, "i");
    const searchQuery = {
      $or: [
        { product_name: [regex] },
        { color: [regex] },
        { purifying_technology: [regex] },
        { booster_pump: [regex] },
        // { capacity: [regex] },
        // { voltage: [regex] },
        // { price: [regex] },
      ],
    };
    const searchProducts = await productModal.find(searchQuery);
    const flattendData = [];
    for (let i = 0; i < searchProducts.length; i++) {
      flattendData.push(searchProducts[i].product_name);
      flattendData.push(searchProducts[i].color);
      flattendData.push(searchProducts[i].purifying_technology);
      flattendData.push(searchProducts[i].booster_pump);
    }
    const uniqueflattendData = [...new Set(flattendData.map((item) => item))];
    console.log(uniqueflattendData);
    res.send(uniqueflattendData);
  } catch (e) {}
};

// EXPORTS //
module.exports = {
  storeProducts,
  getProducts,
  getproductDetail,
  updateProduct,
  deleteProduct,
  filterElements,
  searchSuggestion,
};
