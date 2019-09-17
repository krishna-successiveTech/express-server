var permissions = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  }
}

function hasPermission(moduleName, role, permissionType) {
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
hasPermission('getUsers', 'trainer', 'read');
