import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';

const Config: IConfig = Object.freeze({
    port: process.env.PORT,
});

export default Config;
