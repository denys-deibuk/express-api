const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./pg-queries");
const mongoDb = require("./mongo-queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/pg/users", db.getUsers);
app.get("/pg/users/:id", db.getUserById);
app.post("/pg/users", db.createUser);
app.put("/pg/users/:id", db.updateUser);
app.delete("/pg/users/:id", db.deleteUser);

app.get("/mongo/users", mongoDb.getUsers);
app.get("/mongo/users/:id", mongoDb.getUserById);
app.post("/mongo/users", mongoDb.createUser);
app.put("/mongo/users/:id", mongoDb.updateUser);
app.delete("/mongo/users/:id", mongoDb.deleteUser);

app.listen(port);
