const express = require("express");
const ExpressError = require("./expressError");
const { mean, median, mode, createNumArr } = require("./math");

const app = express();

app.use(express.json());

app.get("/mean", (req, res, next) => {
  let numsStr = req.query.nums;
  if (!numsStr) throw new ExpressError("Must enter a query", 400);
  try {
    let newNums = createNumArr(numsStr);
    return res.json({
      operation: "mean",
      value: mean(...newNums),
    });
  } catch (err) {
    throw new ExpressError("Values must be numeric", 400);
  }
});

app.get("/median", (req, res, next) => {
  let numsStr = req.query.nums;
  if (!numsStr) throw new ExpressError("Must enter a query", 400);
  let newNums = createNumArr(numsStr);
  return res.json({ operation: "median", value: median(...newNums) });
});

app.get("/mode", (req, res, next) => {
  let numsStr = req.query.nums;
  if (!numsStr) throw new ExpressError("Must enter a query", 400);
  let newNums = createNumArr(numsStr);
  return res.json({ operation: "mode", value: mode(...newNums) });
});

app.use((req, res, next) => {
  const err = new ExpressError("Page Not Found", 404);
  next(err);
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg;
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
