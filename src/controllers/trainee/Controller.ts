import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';

class TraineeController {
    public static getInstance() {
        if (!TraineeController.instance) {
            TraineeController.instance = new TraineeController();
        }
        return TraineeController.instance;
    }

    private static instance: TraineeController;

    public get(req: Request, res: Response) {
        const data = [
            {
                name: 'trainee1',
            },
            {
                name: 'trainee2',
            },
        ];
        res.status(200).send(successHandler('Successfully fetch trainees', data));
        console.log('Successfully get Trainees');
    }

    public create(req: Request, res: Response, next: NextFunction) {
        const { name, id } = req.body;
        const data = [{ name, id }];
        if (!id) {
            next({ status: 'Bad Request', message: 'ID is Not Present' });
        } else if (!name) {
            next({ status: 'Bad Request', message: 'Name is Not Present' });
        } else {
            res
                .status(200)
                .send(successHandler('Successfully Created Trainee', data));
        }
    }

    public update(req: Request, res: Response, next: NextFunction) {
        const { name, id } = req.body;
        const data = [{ name, id }];
        if (!id) {
            next({ status: 'Bad Request', message: 'ID is Required' });
        } else {
            res
                .status(200)
                .send(successHandler('Successfully Updated Trainee', data));
        }
    }

    public remove(req: Request, res: Response) {
        const id = req.params.id;
        res
            .status(200)
            .send(successHandler(`Successfully Deleted ${id} Trainee`, ''));
    }
}
export default TraineeController.getInstance();
