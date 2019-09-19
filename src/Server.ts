import * as express from 'express';

export class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
        console.log('in the constructor');
    }

    public bootstrap() {
        this.setupRoutes();
        return this;
    }
    public setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send('I am Ok');
        });
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
