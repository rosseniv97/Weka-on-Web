const express = require('express');
const router = express.Router();
const WekaClassifier = require('./Classifier');

router.post('/get_result',(req, res, next)=> {
    console.log(req);
    var result = WekaClassifier();
    res.status(200).json({
        message: "Success!",
        result: result
    })
});

module.exports = router; 
