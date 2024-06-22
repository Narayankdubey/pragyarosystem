const mongoose = require("mongoose");

const unKnownVisitorSchema = mongoose.Schema({
  ip_address: {
    type: String,
    required: true,
  },
  user_agent: {
    type: String,
    required: true,
  },
  referrer: {
    type: String,
    required: true,
  },
  location:{},
  time: { type: Date, default: Date.now },
});

const unKnownVisitorModal = mongoose.model("totalCount", unKnownVisitorSchema);

module.exports = unKnownVisitorModal;
