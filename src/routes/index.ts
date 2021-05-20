import express from 'express';
import imgProcessor from './api/imgProcessor';

const routes = express.Router();

routes.use('/', imgProcessor);

export default routes;
