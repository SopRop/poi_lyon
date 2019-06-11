import express from 'express';
import data from './data/data.json';

// Set up the express app
const app = express();

// get all todos
app.get('/api/v1/poi/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'poi retrieved successfully',
    poi: data
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});