const express = require('express');
const fs=require("fs").promises
const path=require("path")
async function deleteAllFiles(folderPath){
  try {
    const files = await fs.readdir(folderPath);
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(folderPath, file);
        await fs.unlink(filePath);
      })
    );  console.log("✅ All files deleted from:", folderPath);
  } catch (err) {
    console.error("❌ Error deleting files:", err.message);
  }}

// / your multer setup
const multer=require("multer")
// Handle multer errors specifically
const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      deleteAllFiles("/uploads")
      return res.status(400).json({ error: 'Unexpected file field.' });
    }
      deleteAllFiles("/uploads")

    // Other Multer errors like file too large
    return res.status(400).json({ error: err.message });
  } else if (err) {
    console.log(err)
      deleteAllFiles("/uploads")

    return res.status(500).json({ error: err.message });
  }

  next(); // no error, proceed
};
module.exports=multerErrorHandler