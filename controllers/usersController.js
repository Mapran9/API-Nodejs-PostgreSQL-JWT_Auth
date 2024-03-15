const pool = require('../db'); // ตรวจสอบเส้นทางให้ถูกต้อง

// Function Test 
exports.getUsers = (req, res) => {
    // จำลองข้อมูลผู้ใช้เพื่อทดสอบ
    const mockUsers = [
      { id: 1, username: 'john_doe', name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, username: 'jane_doe', name: 'Jane Doe', email: 'jane.doe@example.com' },
      { id: 3, username: 'alex_smith', name: 'Alex Smith', email: 'alex.smith@example.com' },
    ];
  
    // ส่งข้อมูลจำลองกลับเป็น response
    res.status(200).json(mockUsers);
  };


// Function การเรียกจริงจาก POSTGRES
// exports.getUsers = (req, res) => {
//   pool.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(mockUsers);
//   });
// };
