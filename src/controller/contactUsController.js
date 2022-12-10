const contactUsModal = require("../model/contactUs");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST //
const storeContactUs = async (req, res) => {
  try {
    const contactUs = new contactUsModal(req.body);
    const createContactUs = await contactUs.save();
    res.status(201).send(createContactUs);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL CONTACTUS DATA //
const getContactUs = async (req, res) => {
  try {
    const contactUsData = await contactUsModal.find();
    contactUsData.sort((a, b) =>
      a.time < b.time ? 1 : b.time < a.time ? -1 : 0
    );
    res.send(contactUsData);
  } catch (e) {
    res.send(e);
  }
};

// GET contactUs DATA BY "ID" //
const getContactUsDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const contactUsData = await contactUsModal.findById(_id);
    if (!contactUsData) {
      return res.status(404).send();
    } else {
      res.send(contactUsData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE CONTACTUS DATA //
const updateContactUs = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateContactUs = await contactUsModal.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateContactUs);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE CONTACTUS DATA //
const deleteContactUs = async (req, res) => {
  try {
    const deleteContactUs = await contactUsModal.findByIdAndDelete(
      req.params.id
    );
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteContactUs);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  storeContactUs,
  getContactUs,
  getContactUsDetail,
  updateContactUs,
  deleteContactUs,
};