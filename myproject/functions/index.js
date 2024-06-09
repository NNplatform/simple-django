// const functions = require("firebase-functions");
const {https} = require("firebase-functions");
const express = require("express");
const {exec} = require("child_process");

const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get("/*", (req, res) => {
  exec("python3 manage.py runserver", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(error);
    }
    res.send(stdout ? stdout : stderr);
  });
});

exports.app = https.onRequest(app);
