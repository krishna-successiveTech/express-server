import {
  GET_USERS,
  HEAD_TRAINER,
  TRAINEE,
  TRAINER,
  permissions
} from "../constants";

export default function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (permissions[moduleName][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
