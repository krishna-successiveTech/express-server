import { Request, Response } from 'express';

class TraineeController {
    public static getInstance() {
        if (!TraineeController.instance) {
            TraineeController.instance = new TraineeController();
        }
        return TraineeController.instance;
    }

    private static instance: TraineeController;

    public get(req: Request, res: Response) {
        res.send('get fake data');
    }

    public create(req: Request, res: Response) {
        res.send('create fake data');
    }

    public update(req: Request, res: Response) {
        res.send('update fake data');
    }

    public remove(req: Request, res: Response) {
        res.send('remove fake data');
    }
}
export default TraineeController.getInstance();
