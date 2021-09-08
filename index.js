const express = require("express");
const hotDogRouter = require("./routes/hotdog.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/hotDog", hotDogRouter);

// app.get("/", (req, res) => {
//   res.send("NODEMON WORK!");
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
