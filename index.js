const express = require("express");
// const { default: knex } = require("knex");
const knex = require("./db/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Next In Line!");
});

app.get("/users", (req, res) => {
  knex("users")
    .select()
    .from("users")
    .then((users) => {
      res.send(users);
    });
});

app.post("/users", (req, res) => {
  console.log(req);
  knex("users")
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    })
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});
app.put("/users/", (req, res) => {
  knex("users")
    .where("id", 1)
    .update({
      first_name: "Murtaza",
      last_name: "abcd",
    })
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});

app.delete("/users", (req, res) => {
  knex("users")
    .where("id", 8)
    .del()
    .then(() => {
      knex
        .select()
        .from("users")
        .then((users) => {
          res.send(users);
        });
    });
});

app.listen("3002", () => {
  console.log("Server is running on port 3002");
});
