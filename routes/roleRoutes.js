const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get('/roles', (req, res)=> {
    const query = `SELECT * FROM roles`;

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

router.post('/roles', ({ body }, res) => {
    const query = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [body.title, body.salary, body.department_id];

    db.query(query, params, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
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