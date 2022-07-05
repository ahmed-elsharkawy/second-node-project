const helpers = require("./helpers");

exports.getToDoList = (req, res) => {
  helpers.list({
    type: req.query.type,
  });
  res.end("end list");
};

exports.addNewToDo = (req, res) => {
  helpers.add({
    title: req.query.title,
    body: req.query.body,
    check: req.query.check || "unchecked",
  });
  res.end("end add");
};

exports.deleteOneToDo = (req, res) => {
  const idObj = req.params;
  const id = idObj.id * 1;
  helpers.remove({
    id,
  });
  res.end("end remove");
};

exports.editOneToDo = (req, res) => {
  const idObj = req.params;
  const id = idObj.id * 1;
  helpers.edit({
    id: id,
    title: req.query.title,
    body: req.query.body,
  });
  res.end("end edit");
};

exports.checkOneToDo = (req, res) => {
  const idObj = req.params;
  const id = idObj.id * 1;
  helpers.check({
    id: id,
  });
  res.end("end check");
};
