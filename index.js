import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World", status: 200 });
});

app.get("/users", (req, res) => {
  res.send({ message: "users route", status: 200 });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
