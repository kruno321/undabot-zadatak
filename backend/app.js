const express = require("express");
const cors = require("cors");
const app = express();
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.origin,
  optionsSuccessStatus: 200
};

app.options("*", cors(corsOptions));

app.post(
  "/API/contact",
  cors(corsOptions),
  body("email").isEmail(),
  body("message").isLength({ min: 30 }),
  (req, res) => {
    console.log(`req: ${JSON.stringify(req.body)}`);
    const errors = validationResult(req);
    console.log("errors: ", errors.array());

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      return res.status(200).json({ msg: "Your message has been sent!" });
    }
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
