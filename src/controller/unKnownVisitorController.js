const unKnownVisitorModal = require("../model/unKnownVisitor");

const createData = (req) => {
  let data = {};
  data.ip_address =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req?.socket?.remoteAddress ||
    "";
  data.user_agent = req.get("User-Agent") || "";
  data.referrer = req?.headers?.referer || "unknown";
  return data;
};

// POST //
const storeUnKnownVisitor = async (req, res) => {
  try {
    const data = createData(req);
    const visitor = new unKnownVisitorModal(data);
    const createUnKnownVisitor = await visitor.save();
    res.status(201).send(createUnKnownVisitor);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL VISITORS DATA //
const getUnKnownVisitors = async (req, res) => {
  try {
    const visitorData = await unKnownVisitorModal.find();
    visitorData.sort((a, b) =>
      a.time < b.time ? 1 : b.time < a.time ? -1 : 0
    );
    res.send(visitorData);
  } catch (e) {
    res.send(e);
  }
};

// GET visitor DATA BY "ID" //
const getUnKnownVisitorDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const visitorData = await unKnownVisitorModal.findById(_id);
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
const updateUnKnownVisitor = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUnKnownVisitors = await unKnownVisitorModal.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updateUnKnownVisitors);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE VISITORS DATA //
const deleteUnKnownVisitor = async (req, res) => {
  try {
    const deleteUnKnownVisitor = await unKnownVisitorModal.findByIdAndDelete(
      req.params.id
    );
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteUnKnownVisitor);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  storeUnKnownVisitor,
  getUnKnownVisitors,
  getUnKnownVisitorDetail,
  updateUnKnownVisitor,
  deleteUnKnownVisitor,
};
