import * as mongoose from 'mongoose';
export default class UserSchema extends mongoose.Schema {
    constructor(option: any) {
        const Schema = {
            _id: String,
            email: String,
            name: String,
            password: String,
            role: String,
        };
        super(Schema, option);
    }
}
