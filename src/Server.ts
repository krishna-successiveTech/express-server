import * as bodyParser from 'body-parser';
import * as express from 'express';

export class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
        console.log('in the constructor');
    }

    public bootstrap() {
        this.setupRoutes();
        this.initBodyParser();
        return this;
    }
    public setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send('I am Ok');
        });
    }

    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

    }

    public run() {
        const { app ,
            config: { port} } = this;
        app.listen(port, (err: any) => {
            (err) ? console.log(err) : console.log(`app is running on ${port}`);
        });
        return this;
    }
}
