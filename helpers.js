const fs = require("fs");

function add(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  if (list.length > 0) {
    data.id = list[list.length - 1].id + 1;
  } else {
    data.id = 1;
  }
  list.push(data);
  fs.writeFileSync("db.json", JSON.stringify(list));
}

function edit(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  list.map((el, ind) => {
    if (el.id === data.id * 1) {
      el.title = data.title;
      el.body = data.body;
    }
  });
  fs.writeFileSync("db.json", JSON.stringify(list));
}

function remove(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  list.map((el, ind, arr) => {
    if (el.id === data.id * 1) {
      arr.splice(ind, 1);
    }
  });
  fs.writeFileSync("db.json", JSON.stringify(list));
}

function check(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  list.map((el, ind, arr) => {
    if (el.id === data.id * 1) {
      el.check = "checked";
    }
  });
  fs.writeFileSync("db.json", JSON.stringify(list));
}

function uncheck(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  list.map((el, ind, arr) => {
    if (el.id === data.id * 1) {
      el.check = "unchecked";
    }
  });
  fs.writeFileSync("db.json", JSON.stringify(list));
}

function list(data) {
  const list = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  switch (data.type) {
    case "all":
      console.log(list);
      break;
    case "checked":
      const res1 = list.filter((el) => el.check == "checked");
      console.log(res1);
      break;
    case "unchecked":
      const res2 = list.filter((el) => el.check == "unchecked");
      console.log(res2);
      break;
  }
}

module.exports = {
  add,
  edit,
  remove,
  list,
  check,
  uncheck,
};
