const mysql = require("mysql");

// Membuat koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan username database Anda
  password: "", // Ganti dengan password database Anda
  database: "task_management_db", // Ganti dengan nama database Anda
});

/connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

// Ekspor koneksi untuk digunakan di file lain
module.exports = connection;