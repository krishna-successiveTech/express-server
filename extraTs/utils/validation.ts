import { IUsers } from './../interfaces';
import { validateEmail } from './helper';

export default function validateUsers(users: IUsers[]): void {
  const validUsers: IUsers[] = [];
  const invalidUsers: IUsers[] = [];
  users.forEach((userEmail) => {
    const {
      traineeEmail,
      reviewerEmail,
    } = userEmail;
    validateEmail(traineeEmail) && validateEmail(reviewerEmail) ?
    validUsers.push(userEmail) : invalidUsers.push(userEmail);
  });

  console.log(validUsers.length === 0 ? 'No Valid Users count=>' + validUsers.length :
  JSON.stringify(validUsers) + ' count=>' + validUsers.length);
  console.log(invalidUsers.length === 0 ? 'No in valid user and count=>' + invalidUsers.length :
   JSON.stringify(invalidUsers) + ' count=>' + invalidUsers.length);
}
