const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const connectDatabase = require('./database');

console.log(process.env.NODE_ENV);
// Make database connection
connectDatabase();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
