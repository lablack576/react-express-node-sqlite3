const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());

// Initialize connection to Sqlite3 database
const db = new sqlite3.Database("./mydatabase.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the mydatabase SQLite database.");
});

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// GET request to return all users from database
app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        res.send(rows);
    });
});

// Listen for incoming requests on port 3001
app.listen(3001, () => {
    console.log("Server listening on port 3001.");
});
