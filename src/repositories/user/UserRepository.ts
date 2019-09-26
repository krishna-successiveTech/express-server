import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {

    public static generateObjectId() {
        console.log(mongoose.Types.ObjectId());
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

    public delete(data: any): any {
        return this.model.deleteOne(data, (err) => {
            if (err) {
                console.log('Error');
            }
        });
    }

    public updateUser(oldData: any, newData: any) {
        return this.model.updateOne(oldData, newData, (err) => {
            if (err) {
                console.log('Error');
            }
        },
        );
    }

    public getUser(data) {
        return this.model.find(data, (err) => {
            if (err) {
                console.log('err');
            }
        });
    }

    public count() {
        return this.model.estimatedDocumentCount();
    }

    public findone(query) {
        return this.model.findOne(query);
    }
}
