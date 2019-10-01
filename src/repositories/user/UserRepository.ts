import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public async createUser(data) {
        return await super.createUser(data);
      }
      public async updateUser(data) {
        return await super.update(data);
      }
      public async deleteData(data) {
        return await super.delete(data);
      }
      public async findone(data) {
        return await super.findOne(data);
      }
      public async countData( ) {
        return await super.count( );
      }
}
