const index = require("./index.json");
const hobby = require("./hobby.json");
const roles = require("./roles.json");
const history = require("./history.json");
const calls = require("./history.json");

module.exports = {
  ...index,
  tableData: {
    hobby,
    roles,
    history,
  },
  calls,
};
