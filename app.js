const express = require("express");
const path = require("path")
const app = express();

let port = 80 || process.env.PORT;

const publicPath = path.resolve('./public');
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
});

app.get("/views/home.html", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
});

app.get("/views/register.html", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/register.html"));
});

app.get("/views/login.html", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"));
});

app.listen(port, () => {
    console.log(`online en ${port}`);
});