const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// middleware function
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

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

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  })

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  })
}

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  })
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  })
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  })
}

app
  .route('/api/v1/users')
  .get(getAllUsers)
  .post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
