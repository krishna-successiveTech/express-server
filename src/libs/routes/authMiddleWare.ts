import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';

export default (moduleName, permissionType) => async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.log('Inside Auth Middleware');
    const token = req.header('Authorization');
    const { key } = configuration;
    const user = jwt.verify(token, key);
    const userRepository = new UserRepository();
    const userData = await userRepository.findone({ _id: user._id });
    if (!userData) {
        next({
            error: 'Unauthorized Access',
            message: 'User not match',
            status: 403,
        });
    }
    else if (!hasPermission(moduleName, userData.role, permissionType)) {
        next({
            message: `${permissionType} Permission is not allowed.`, status: 400,
        });
    }
    else {
        req.query = userData._id;
        next();
    }
};
