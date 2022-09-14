const express = require("express");
const app = express();
app.use(express.static("views"));
const userRouter = require("./routes/users")
app.use("/", userRouter);
app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));




