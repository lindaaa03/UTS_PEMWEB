const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../config/database"); // Pastikan ini mengarah ke file database yang benar

// Route untuk mendaftar
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Query untuk memasukkan pengguna baru
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(query, [username, email, hashedPassword], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database query error");
    }
    res.send("User registered successfully!");
  });
});

// Route untuk halaman profil
router.get("/profile", (req, res) => {
  db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [req.user.id],
    (err, tasks) => {
      if (err) {
        return res.status(500).send("Database query error");
      }
      res.render("profile", { tasks });
    }
  );
});

module.exports = router;
