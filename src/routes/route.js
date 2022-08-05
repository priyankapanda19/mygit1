const express = require('express');
const abc = require('../introduction/intro');
const { call1 } = require('../logger/logger');
const { call4 } = require('../util/helper');
const { call2 } = require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    call1.welCome()
    call2.greeting()
    call3.date()
    call4.nameOfMonth()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason