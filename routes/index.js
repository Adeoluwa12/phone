const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home')
});


router.get('/order', (req, res) => {
    res.render('order')
});


router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/thank', (req, res) => {
    res.render('thank')
});


router.get('/contact', (req, res) => {
    res.render('contact')
});

module.exports = router;