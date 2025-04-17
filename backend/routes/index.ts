var express = require('express');
var router = express.Router();
import { Request, Response, NextFunction } from "express";

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Root index');
});

module.exports = router;
