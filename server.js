const express = require("express");
const routes = require("./routes/");
const db = require("./db/connection");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', routes);
app.use((req, res) => {
    res.status(404).end();
})

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Database Connected!");

    app.listen(PORT, () => {
        console.log("Server is running!");
    });
});
