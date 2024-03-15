const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken'); // ตรวจสอบเส้นทางให้ถูกต้อง
const { getUsers } = require('../controllers/usersController'); // ตรวจสอบเส้นทางให้ถูกต้อง

router.get('/', authenticateToken, getUsers);

module.exports = router;
