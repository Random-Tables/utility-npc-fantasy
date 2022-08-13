const index = require("./index.json");
const hobby = require("./hobby.json");
const roles = require("./roles.json");
const history = require("./history.json");

exports.index = {
  ...index,
  tableData: {
    hobby,
    roles,
    history,
  },
};