import express from 'express'; 
import { tareasRouter } from './routes/tareas-routes.js';

const app = express();

app.use(express.json());
app.use('/api', tareasRouter);

export default app;