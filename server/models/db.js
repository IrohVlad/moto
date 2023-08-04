import {Sequelize} from "sequelize";
import env from 'dotenv'
env.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    'postgres',
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        omitNull: true,
    }
)
export default sequelize;