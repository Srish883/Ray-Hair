const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", require("./routes/data"));

app.listen(8000, () => console.log("Server running on 8000"));
