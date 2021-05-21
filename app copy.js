const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
MongoClient = require("mongodb").MongoClient;

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

// MongoClient.connect(
//   "",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then((db) => {
//     console.log("Conectado db=" + db);
//     app.listen(5000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// async function main() {
//   const url =
//     "mongodb+srv://xandeq:alexandre10@cluster0.5jbns.mongodb.net/dev?retryWrites=true&w=majority";
//   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//   try {
//     await client.connect();
//     app.listen(5000);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

//main().catch(console.error);

// await listData;
// MongoClient.connect(url, { useNewUrlParser: true })
//   .then(function (db) {
//     // <- db as first argument
//     console.log("Conectado");
//     console.log(db);
//     app.listen(5000);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
const url =
     
mongoose.connect(url, {
  server: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  },
  replset: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  },
  mongos: {
    socketOptions: {
      socketTimeoutMS: 0,
      keepAlive: true
    },
    reconnectTries: 30
  }
});
