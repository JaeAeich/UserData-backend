const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter.js");
const dbConnect = require("./dbConnect");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config("./.env");

const app = express();

//middlewares
app.use(express.json({ limit: "10mb" }));
app.use(morgan("common"));
let origin = "*";
app.use(
	cors({
		credentials: true,
		origin,
	})
);

app.use("/person", userRouter);
app.get("/", (req, res) => {
	res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
