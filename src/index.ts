import * as dotenv  from 'dotenv';
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(morgan("common"));
app.use(helmet({
  referrerPolicy: { policy: "no-referrer" },
}));

// define route handler for the default home page
app.use('/api', routes)

// start the express server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})