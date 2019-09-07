const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const connectDatabase = require('./database');

// Make database connection
connectDatabase();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
