require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', gameRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));