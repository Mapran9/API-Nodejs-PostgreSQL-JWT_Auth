require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
