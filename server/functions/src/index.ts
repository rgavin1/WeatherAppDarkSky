import * as functions from "firebase-functions";
import express from "express";
const PORT = 5000;
const app = express();

app.get("/", (_req, res) => {
    res.send("Hello Ramsey");
});

app.listen(PORT, () => {
    console.log("Listening on PORT: ", PORT);
});

exports.app = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});