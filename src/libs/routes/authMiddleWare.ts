import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import hasPermission from './hasPermission';

export default (moduleName, permissionType) => (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    console.log('Inside Auth Middleware');
    const token = req.header('Authorization');
    const { key } = configuration;
    const user = jwt.verify(token, key);
    console.log(user);
    if (user) {
        const role = user.role;
        if (hasPermission(moduleName, role, permissionType)) {
            console.log('User is Authorized');
        }
        else {
            next({
                message: `${permissionType} permission is not allowed`,
                status: 400,
            });
        }
    }
    next();
};
