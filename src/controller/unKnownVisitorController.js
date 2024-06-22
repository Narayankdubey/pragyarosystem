const unKnownVisitorModal = require("../model/unKnownVisitor");
const UAParser = require("ua-parser-js");
const geoip = require("geoip-lite");

const getData = (res) => {
  // geoip.update();
  let result = [];

  for (let item of res) {
    let info = {};
    info._id = item?._id || "";
    info.time = item.time;
    info.ip_address = item.ip_address;
    info.referrer = item.referrer;

    let parser = new UAParser(item?.user_agent);
    let uaInfo = parser.getResult();

    const str = item?.ip_address || "";
    const index = str.indexOf(",");
    const substr = index !== -1 ? str.substring(0, index) : str;
    const geo = geoip.lookup(substr);

    info = { ...info, ...geo };

    info.browser = `${uaInfo?.browser?.name || ""} - ${
      uaInfo?.browser?.version || ""
    }`;
    info.engine = `${uaInfo?.engine?.name || ""} - ${
      uaInfo?.engine?.version || ""
    }`;
    info.os = `${uaInfo?.os?.name || ""} - ${uaInfo?.os?.version || ""}`;
    info.device = `${uaInfo?.device?.vendor || ""} - ${
      uaInfo?.device?.model || ""
    } (${uaInfo?.device?.type || ""})`;
    info.cpu = `${uaInfo?.cpu?.architecture || ""}`;
    info.location = item?.location || {}

    result.push(info);
  }
  return result;
};

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
    data.location = req.body;
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

    const result = getData(visitorData);
    // console.log(result, 'result')
    res.send(result);
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
