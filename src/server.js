import 'dotenv/config'
import express, { Router } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, ()=>console.log("http://localhost:"+process.env.PORT));
