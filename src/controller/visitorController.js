const visitorModal = require("../model/visitor");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST //
const storeVisitor = async (req, res) => {
  try {
    const visitor = new visitorModal(req.body);
    const token = await visitor.generateAuthToken();
    const createVisitor = await visitor.save();
    res.cookie("visitDetail", JSON.stringify(visitor), {
      expires: new Date(Date.now() + 600000000),
      httpOnly: true,
    });
    res.status(201).send(createVisitor);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL VISITORS DATA //
const getVisitors = async (req, res) => {
  try {
    const visitorData = await visitorModal.find();
    visitorData.sort((a, b) =>
      a.time < b.time ? 1 : b.time < a.time ? -1 : 0
    );
    res.send(visitorData);
  } catch (e) {
    res.send(e);
  }
};

// GET visitor DATA BY "ID" //
const getVisitorDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const visitorData = await visitorModal.findById(_id);
    if (!visitorData) {
      return res.status(404).send();
    } else {
      res.send(visitorData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE VISITORS DATA //
const updateVisitor = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateVisitors = await visitorModal.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateVisitors);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE VISITORS DATA //
const deleteVisitor = async (req, res) => {
  try {
    const deleteVisitor = await visitorModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteVisitor);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  storeVisitor,
  getVisitors,
  getVisitorDetail,
  updateVisitor,
  deleteVisitor,
};
