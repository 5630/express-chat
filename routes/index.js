const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'express-socket-io'
    });
})

module.exports = router;