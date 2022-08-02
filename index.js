const express = require("express");
const app = express();
const cookiesRouter = require("./routes/cookies.router");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/cookie", cookiesRouter);

const PORT = process.env.PORT || 9000;
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
