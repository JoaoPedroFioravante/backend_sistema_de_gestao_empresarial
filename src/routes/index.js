import express from    'express';
import stockRoutes from './stockRoutes.js';
import clientRoutes from './clientRoutes.js';
import serviceOrderRoutes from './serviceOrderRoutes.js';
import authRoutes from './authRoutes.js';
import errorTreatment from '../middlewares/errorTreatment.js';

const app = express.Router();

app.use("/stock", stockRoutes);
app.use("/clientes", clientRoutes);
app.use("/serviceOrder", serviceOrderRoutes);
app.use("/auth", authRoutes);
app.use(errorTreatment);

export default app;