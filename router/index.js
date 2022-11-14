const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);
router.get('/vision',(req,res)=>{
    return res.render('vision',{
        title:'Vision',
    });
});
router.get('/events',(req,res)=>{
    return res.render('events',{
        title:'Events',
    });
});
router.get('/join',(req,res)=> {
    return res.render('join',{
        title:'Join',
    });
});

module.exports = router;