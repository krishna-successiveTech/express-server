import * as bcrypt from 'bcrypt';
import { TRAINER } from '../libs/constants';
import UserRepository from '../repositories/user/UserRepository';

export default function seed() {
    const user = new UserRepository();
    const saltRounds = 10;
    console.log('inside seedData');
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync('test@123', salt);
    const newUser = {
        email: 'user1@gmail.com',
        name: 'user1',
        password: hash,
        role: TRAINER,
    };
    user.count().then((res) => {
        if (res === 0) {
            user.createUser(newUser)
                .then((userData) => {
                    console.log('User Created', userData);
                })
                .catch((err) => {
                    console.log('Error occured while creating user', err);
                });
        }
    });
}
