const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get('/departments', (req, res)=> {
    const query = `SELECT * FROM departments`;

    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return
        } else {
            res.json({
                message: 'success',
                data: rows
            });
        }
    });
});

router.post('/departments', ({ body }, res) => {
    const query = `INSERT INTO departments (name) VALUES (?)`;
    const params = [body.name];

    db.query(query, params, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return
        } else {
            res.json({
                message: 'success',
                data: body,
                changes: result.affectedRows
            });
        }
    });
});

module.exports = router;