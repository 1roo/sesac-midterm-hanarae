const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  await Todo.findAll({}).then((result) => res.send(result));
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  const { id } = req.param;
  const todo = await Todo.findOne({ where: { id } }).then((result) => {
    if (result) {
      res.send(todo);
    }
  });
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  const { title } = req.body;
  if (done) {
    console.error("done이 true로 시작할 수 없습니다");
    res.send({ message: "Internal Server Error" });
  } else {
    await Todo.create(
      {
        title,
        done: "false",
      }.then((result) => {
        res.send({ result });
      })
    );
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  const { id } = req.param;
  if (id) {
    const result = await Todo.update({ where: { id } });
    if (!result) {
      res.send({ message: "Todo not found" });
    } else {
      Todo.destroy(
        { where: { id: req.body.id } }.then((result) => {
          res.send({ id: id, title: title });
        })
      );
    }
  } else {
    res.send({ done: true });
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  const { id } = req.param;
  const result = await Todo.findOne({ where: { id } });
  if (!result) {
    res.send({ message: "Todo not found" });
  } else {
    await Todo.destroy(
      { where: { id: req.body.id } }.then((result) => {
        res.send({ message: "Todo deleted successfully", deletedId: "1" });
      })
    );
  }
};
