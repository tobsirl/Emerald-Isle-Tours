const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    success: 'success',
    message: 'Welcome to the first endpoint'
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  res.send('Done');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
