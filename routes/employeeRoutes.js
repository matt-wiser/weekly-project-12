const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get('/employees', (req, res)=> {
    const query = `SELECT * FROM employees`;

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

router.post('/employees', ({ body }, res) => {
    const query = `INSERT INTO employees (first_name, last_name, manager_name, role_id) VALUES (?, ?, ?, ?)`;
    const params = [body.first_name, body.last_name, body.manager_name, body.role_id];

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

router.put('/employees/:id', (req, res) => {
    const query = `UPDATE employees SET role_id =? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];

    db.query(query, params, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        } else if (!result.affectedRows) {
            res.json({
                message: 'No Employee Found!'
            })
        } else {
            res.json({
                message: 'success',
                data: req.body,
                change: result.affectedRows
            })
        }
    });
});

module.exports = router;