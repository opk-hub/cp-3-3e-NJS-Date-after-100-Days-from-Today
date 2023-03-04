//crreate express instance
const express = require("express");
const app = express();

//create a date fns
const addDays = require("date-fns/addDays");

//create handler function
app.get("/", (request, response) => {
  const dateTime = new Date();
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
module.exports = app;
