const express = require('express');
const router = express.Router();

const controller = require('../controllers/user')

router.post('/details',controller.postdetails);

router.get('/userinfo',controller.getdetails);

router.delete('/del/:id',controller.delete);

module.exports=router