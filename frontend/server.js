import express from "express";

const app = express();

app.use(express.static("public"));

const PORT = 3221;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend Server ready at http://34.193.192.21:3221/index.html`);
});
