import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/index.js';
import path from 'path';
import sequelize from './models/db.js';
import { Users } from './models/model.js'
const __dirname = path.resolve();
dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static(path.resolve(__dirname, 'static')));

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        app.listen(PORT, () => console.log(`server started on ${PORT}`));
    } catch {
        throw new Error('не удалось запустить')
    }
}
start();