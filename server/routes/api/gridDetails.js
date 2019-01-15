const express = require("express");
const router = express.Router();


router.get('/legs',(req,res) =>{
    res.json("legs");
});

router.get('/stops', (req, res) => {
    res.json("stops");
});

router.get('/driver', (req, res) => {
    res.json("driver");
});


module.exports = router;