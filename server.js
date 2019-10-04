const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const connectDatabase = require('./database');

console.log(process.env.NODE_ENV);
// Make database connection
connectDatabase();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
