var express = require('express');
var router = express.Router();
import { Request, Response, NextFunction } from "express";


/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(' Root users route');
});


module.exports = router;
