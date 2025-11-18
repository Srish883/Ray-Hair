const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { Photo } = require('../models');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/photo', auth, upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: 'No file' });
    // upload buffer to Cloudinary
    const result = await cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'ray_photos' }, async (error, result) => {
      // handled below via stream
    });

    // using promise wrapper to upload buffer
    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: 'ray_photos' }, (error, result) => {
          if (result) resolve(result);
          else reject(error);
        });
        stream.end(buffer);
      });
    };
    const uploaded = await streamUpload(req.file.buffer);

    const photo = await Photo.create({
      userId: req.user.id,
      filename: req.file.originalname,
      url: uploaded.secure_url,
      meta: {} // AI metadata stub
    });
    res.json(photo);
  } catch (err) {
    console.error('Upload error', err);
    res.status(500).send('Upload error');
  }
});

module.exports = router;
