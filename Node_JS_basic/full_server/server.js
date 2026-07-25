import express from 'express';
import mapRoutes from './routes/index.js';

const app = express();

mapRoutes(app);

app.listen(1245);

export default app;
