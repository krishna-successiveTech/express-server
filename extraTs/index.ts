import { diamond, equilateral } from './patterns';
import { hasPermission, validateUsers } from './utils';

diamond(4);
equilateral(5);

console.log(hasPermission('GET_USERS', 'trainer', 'write'));

const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  }, {
    traineeEmail: 'trainee1@succsive.tech',
    reviewerEmail: 'reviewer1@succsive.tech',
  }];

validateUsers(users);


