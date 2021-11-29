const express = require('express');
require('dotenv').config();
const apiController = require('../controller/apiController');
const router = express.Router();
const apicache = require('apicache');

//Caching requests for performance
let cache = apicache.middleware;

router.get('/api', cache('1 minutes'), apiController.getMovie);

module.exports =  router;

