const adminModal = require("../model/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST //
const storeAdmin = async (req, res) => {
  try {
    const admin = new adminModal(req.body);
    const token = await admin.generateAuthToken();
    const createAdmin = await admin.save();
    res.status(201).send(createAdmin);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL ADMINS DATA //
const getAdmins = async (req, res) => {
  try {
    const adminData = await adminModal.find();
    res.send(adminData);
  } catch (e) {
    res.send(e);
  }
};

// GET ADMIN DATA BY "ID" //
const getAdminDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const adminData = await adminModal.findById(_id);
    if (!adminData) {
      return res.status(404).send();
    } else {
      res.send(adminData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE ADMINS DATA //
const updateAdmin = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateAdmins = await AdminModal.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateAdmins);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE ADMINS DATA //
const deleteAdmin = async (req, res) => {
  try {
    const deleteAdmin = await adminModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteAdmin);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  storeAdmin,
  getAdmins,
  getAdminDetail,
  updateAdmin,
  deleteAdmin,
};
