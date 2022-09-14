require("dotenv").config();
const errorMiddleware = require("./middlewares/error.middleware");
const validators = require("./middlewares/validators");
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT;
app.use(cors({ allowedOrigin: ["http://localhost:3000/"] }))
app.use(express.json());
console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
  console.log(`Example app listening at port http://localhost:${port}`);
});
require("./routes/api")(app, validators);
// Error Handler Middleware
app.use(errorMiddleware);
