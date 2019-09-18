import { IPermission } from "./interfaces";

const GET_USERS :string= "getUsers";
const HEAD_TRAINER :string= "head-trainer";
const TRAINEE :string= "trainee";
const TRAINER :string= "trainer";
const moduleName: string = "moduleName";
const permissionType: string = "permissionType";
const role: string = "role";

const permissions:IPermission = {
  GET_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
export { GET_USERS, HEAD_TRAINER, TRAINEE, TRAINER, permissions,moduleName,role,permissionType };