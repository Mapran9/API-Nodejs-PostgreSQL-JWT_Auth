// Test
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  // รับข้อมูลทั้งหมดจาก request body
  const userData = req.body;
  
  // ตรวจสอบความถูกต้องของข้อมูลการ login (เช่น username และ password)
  // สำหรับตัวอย่าง, ข้อมูลเป็น static แต่ในการใช้งานจริงควรตรวจสอบจากฐานข้อมูล
  if (userData.username === "admin" && userData.password === "password") {
    // สร้าง payload สำหรับ JWT โดยเอาข้อมูลที่ผู้ใช้ส่งมาทั้งหมด
    // ลบ password ออกจาก payload เพื่อความปลอดภัย
    const { password, ...payload } = userData;

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.send({ token });
  } else {
    res.status(401).send('Login information is incorrect');
  }
};



// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const pool = require('../db'); // ตรวจสอบเส้นทางให้ถูกต้อง

// exports.login = (req, res) => {
//     const { username, password } = req.body;

//     pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
//         if (error) {
//             throw error;
//         }

//         if (results.rows.length > 0) {
//             const user = results.rows[0];

//             // ตรวจสอบรหัสผ่านด้วย bcrypt
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err) {
//                     throw err;
//                 }

//                 if (isMatch) {
//                     // รหัสผ่านถูกต้อง, สร้าง JWT
//                     const token = jwt.sign({ sub: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//                     res.send({ token });
//                 } else {
//                     // รหัสผ่านไม่ถูกต้อง
//                     res.status(401).send('Username or password is incorrect');
//                 }
//             });
//         } else {
//             // ไม่พบผู้ใช้ในฐานข้อมูล
//             res.status(401).send('Username does not exist');
//         }
//     });
// };