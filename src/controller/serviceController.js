const serviceModal = require("../model/service");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../utils/emailSender");
const { validate } = require("../utils/utilities");
const {serviceRequestTemplate} = require("../utils/generateTemplate")

// Server

// POST //
const storeService = async (req, res) => {
  try {
    const data = req.body;
    const service = new serviceModal(req.body);
    const createService = await service.save();
    if(data.email && data.email.length > 0 && validate("email",data.email)){
      const emailContent = serviceRequestTemplate(req.body)
      sendMail(req.body.email,"Pragya RO System :: Service Request",emailContent)
    }
    res.status(201).send(createService);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getService = async (req, res) => {
  try {
    const serviceData = await serviceModal.find();
    serviceData.sort((a, b) =>
      a.time < b.time ? 1 : b.time < a.time ? -1 : 0
    );
    res.send(serviceData);
  } catch (e) {
    res.send(e);
  }
};

const getServiceDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const serviceData = await serviceModal.findById(_id);
    if (!serviceData) {
      return res.status(404).send();
    } else {
      res.send(serviceData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE service DATA //
const updateService = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateService = await serviceModal.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateService);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE service DATA //
const deleteService = async (req, res) => {
  try {
    const deleteService = await serviceModal.findByIdAndDelete(
      req.params.id
    );
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteService);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  storeService,
  getService,
  getServiceDetail,
  updateService,
  deleteService,
};
