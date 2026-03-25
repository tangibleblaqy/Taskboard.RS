import express from 'express'; 
import { tareasRouter } from './routes/tareas-routes.js';

const app = express();

app.use(express.json());
app.use('/api', tareasRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);

    const status = err.status || 500;
    if (status >= 400 && status < 500) {
        return res.status(status).json({ error: err.message });
    }
    return res.status(500).json({ 
        error: process.env.NODE_ENV === 'development'
        ? err.message
        : 'Error interno del servidor' 
    });
});

export default app;

