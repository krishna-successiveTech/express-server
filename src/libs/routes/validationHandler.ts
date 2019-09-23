import { NextFunction, Request, Response } from 'express';
import { isNullOrUndefined } from 'util';

export default (config) => (req: Request, res: Response, next: NextFunction) => {
    console.log('Inside ValidationHandler Middleware');
    const keys = Object.keys(config);
    const errors = [];
    keys.forEach((key) => {
        const item = config[key];
        const errMessage = item.errorMessage;
        const values = item.in.map((val) => {
            return req[val][key];
        });
        if (item && item.required) {
            const validatedValues = values.filter((val) => val);
            if (validatedValues.length !== values.length) {
                errors.push({
                    [key]: errMessage || `${key} is required` || 'Error',
                    status: 400,
                });
            }

            if (item.string) {
                if (typeof validatedValues[0] !== 'string') {
                    errors.push({
                        [key]: errMessage || `${key} must be a string` || 'Error',
                        status: 400,
                    });
                }
            }

            if (item.regex) {
                const regex = item.regex;
                if (!regex.test(validatedValues[0])) {
                    errors.push({
                        [key]: errMessage || `${key} is not valid expression` || 'Error',
                        status: 400,
                    });
                }
            }

            if (item.isObject) {
                if (typeof validatedValues[0] !== 'object') {
                    errors.push({
                        key: errMessage || `${key}  must be an object` || 'Error',
                        status: 400,
                    });
                }
            }

            if (item.number) {
                if (!isNaN(validatedValues[0]) || validatedValues[0] === '' || validatedValues[0] === undefined) {
                    errors.push({
                        [key]: errMessage || `${key}  must be an number` || 'Error',
                        status: 400,
                    });
                }
            }
        }

        else if (item && !item.required) {
            values.forEach((preDefinedValues) => {
                if (isNullOrUndefined(preDefinedValues)) {
                    preDefinedValues = item.default;
                } else if (preDefinedValues === '') {
                    preDefinedValues = item.default;
                }
                else {
                    preDefinedValues = values;
                }
            });
        }
    });
    if (errors.length > 0) {
        res.status(400).send({ data: errors, message: 'Error', status: 400 });
    }
    else {
        next();
    }
};
