import Config from './config/configuration';
import { Server } from './Server';

const server = new Server(Config);
server.bootstrap().run();
