import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {

    public static generateObjectId() {
        // console.log(mongoose.Types.ObjectId());
        return String(mongoose.Types.ObjectId());
    }

    private model: mongoose.Model<IUserModel>;

    constructor() {
        this.model = userModel;
    }

    public createUser(data: any): Promise<IUserModel> {
        return this.model.create({
            ...data,
            _id: UserRepository.generateObjectId(),
        });
    }

    public delete(data: any) {
        return this.model.deleteOne(data);
    }

    public updateUser(oldData: any, newData: any) {
        return this.model.updateOne(oldData, newData);
    }

    public getUser(data: any) {
        return this.model.findOne(data);
    }

    public count() {
        return this.model.estimatedDocumentCount();
    }

    public findone(query) {
        console.log('query', query);
        return this.model.findOne(query);
    }
}
