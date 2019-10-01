import { Request } from 'express';
import { TRAINEEE } from './constants';
export interface IPermission {
  traineee: {
    read: string[];
    write: string[];
    delete: string[];
    update: string[];
  };
}

export interface IUserRead extends Request {
  user: any;
}
