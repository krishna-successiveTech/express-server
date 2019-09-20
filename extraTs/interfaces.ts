import { GET_USERS } from './constants';

export interface IPermission {
    GET_USERS: {
        all: string[];
        read: string[];
        write: string[];
        delete: string[];
    };
}

export interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}