var express = require('express');
var x = 0;
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x === undefined){
        x = (Math.random(10));
      }else{
        x = req.query.x;
      }
      var abs = Math.abs(x);
      var acos = Math.acos(x);
      var sin = Math.sin(x, x);
      res.send(`abs applied to ${x} is ${abs}.<br> acos applied to ${x} is ${acos}. <br>sin applied to ${x} is ${sin}`);
});

module.exports = router;

