import express from    'express';
import stockRoutes from './stockRoutes.js';
import clientRoutes from './clientRoutes.js';
import serviceOrderRoutes from './serviceOrderRoutes.js';
import authRoutes from './authRoutes.js';

const app = express.Router();

app.use("/stock", stockRoutes);
app.use("/clientes", clientRoutes);
app.use("/serviceOrder", serviceOrderRoutes);
app.use("/auth", authRoutes);

export default app;