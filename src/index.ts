import Config from './config/configuration';
import { Server } from './Server';

console.log('Inside Config', Config);
const server = new Server(Config);
server.bootstrap().run();
