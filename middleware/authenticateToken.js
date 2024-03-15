const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // รับ token จาก header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // ถ้าไม่มี token ส่งคืน status 401 Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // ถ้า token ไม่ถูกต้อง ส่งคืน status 403 Forbidden
    req.user = user;
    next(); // ถ้าตรวจสอบแล้วถูกต้อง ไปยัง function ถัดไป
  });
}

module.exports = authenticateToken;
