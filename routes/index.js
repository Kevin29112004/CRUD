var express = require('express');
var router = express.Router();
var user = require('../controller/userconteroller');

/* GET home page. */
router.get('/', user.get_data);
router.post('/', user.insert);


module.exports = router;
