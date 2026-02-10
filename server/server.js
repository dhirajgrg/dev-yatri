require('dotenv').config(); // Load this first!
const connectDB = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // 1. Connect to Database
    await connectDB();

    // 2. Start Listening
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err.message);
    process.exit(1);
  }
};

startServer();
