const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret_key", // Ganti dengan kunci rahasia yang lebih kuat
    resave: false,
    saveUninitialized: true,
  })
);

// Set view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Rute untuk root
app.get("/", (req, res) => {
  res.redirect("/auth/login");
});

// Rute auth
app.use("/auth", authRouter);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
