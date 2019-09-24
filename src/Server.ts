import * as bodyParser from 'body-parser';
import * as express from 'express';
import { errorHandler, notFoundRoute, successHandler } from './libs/routes';

import Database from './libs/Database';
import router from './router';

export class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
        console.log('in the constructor');
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    public setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send('I am Ok');
        });
        app.use('/api', router);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }

    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

    }

    public run() {
        const { app,
            config: { port, mongoUri } } = this;

        Database.open(mongoUri).then(() => {
            app.listen(port, (err: any) => {
                (err) ? console.log(err) : console.log(`app is running on ${port}`);
            });
            return this;
        });

    }
}
