const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const paymentRouter = require("./routes/payment-route");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.use(paymentRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
