import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import { successHandler } from '../../libs/routes';
import UserRepository from '../../repositories/user/UserRepository';

const user = new UserRepository();

class UserController {

    public async get(req: Request, res: Response) {
        const { _id } = req.query;
        const userData = await user.getUser(_id);
        res.status(200).send(successHandler('User Data', 200, userData));
    }

    public async create(req: Request, res: Response) {
        const { id, name } = req.body;
        const userData = await user.createUser({ id, name });
        res.status(200).send(successHandler('User Created', 200, userData));
    }

    public async update(req: Request, res: Response) {
        const { id, newName } = req.query;
        const userData = await user.updateUser({ _id: id, name: newName });
        console.log('User Updated ');
        res.status(200).send(successHandler('USer Updated', 200, userData));
    }

    public async remove(req: Request, res: Response) {
        const { id } = req.params.id;
        const userData = await user.delete(id);
        res.status(200).send(successHandler('User Removed', 200, userData));
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller Login');
        const userData = await user.getUser({ email });
        if (!userData) {
            next({ err: 'Not Found', status: 404, message: 'Route Not Found' });
        }
        const { password} = userData;
        if (!bcrypt.compareSync(req.body.password, password)) {
            next('Password does not match');
        }
        const token = jwt.sign(userData.toJSON(), configuration.key, {
            expiresIn: Math.floor(Date.now() / 1000) + (15 * 60),
        });
        res.send({
            data: token,
            message: 'login successfully',
            status: 200,

        });
    }
}

export default new UserController();
