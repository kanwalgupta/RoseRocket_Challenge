const express = require("express");
const router = express.Router();
const stops = require("../../data-files/stops");
const legs = require("../../data-files/legs");
const driver_loc = require("../../data-files/driver_loc");

router.get('/legs',(req,res) =>{
    res.json(legs);
});

router.get('/stops', (req, res) => {
    res.json(stops);
});

router.get('/driver', (req, res) => {
    res.json(driver_loc);
});


module.exports = router;