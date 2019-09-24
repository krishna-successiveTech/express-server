import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';

const Config: IConfig = Object.freeze({
    key: process.env.key,
    mongoUri: process.env.MONGO_URL,
    port: process.env.PORT,
});

export default Config;
