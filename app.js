const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    success: 'success',
    data: 'Welcome to the first endpoint'
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
