import * as dotenv  from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


// define route handler for the default home page
app.use('/', (req, res) => {
  res.send('working')
})

// start the express server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})