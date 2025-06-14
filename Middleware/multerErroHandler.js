const express = require('express');
// / your multer setup
const multer=require("multer")
// Handle multer errors specifically
const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ error: 'Unexpected file field.' });
    }
    // Other Multer errors like file too large
    return res.status(400).json({ error: err.message });
  } else if (err) {
    return res.status(500).json({ error: 'Something went wrong.' });
  }

  next(); // no error, proceed
};
module.exports=multerErrorHandler