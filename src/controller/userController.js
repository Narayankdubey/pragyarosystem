const userModal = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST //
const storeUser = async (req, res) => {
  try {
    const user = new userModal(req.body);
    const token = await user.generateAuthToken();
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL USERS DATA //
const getUsers = async (req, res) => {
  try {
    const userData = await userModal.find();
    res.send(userData);
  } catch (e) {
    res.send(e);
  }
};

// GET USER DATA BY "ID" //
const getuserDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await userModal.findById(_id);
    if (!userData) {
      return res.status(404).send();
    } else {
      res.send(userData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE USERS DATA //
const updateuser = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUsers = await userModal.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUsers);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE USERS DATA //
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await userModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteUser);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};
