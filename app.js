const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // => /api/places...
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

//MongoClient.connect(
  MongoClient.connect(
    'mongodb+srv://xandeq:alexandre10@cluster0.5jbns.mongodb.net/places?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Conectado');
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
