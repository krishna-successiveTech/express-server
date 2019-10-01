import * as bcrypt from 'bcrypt';
import { TRAINER } from '../libs/constants';
import UserRepository from '../repositories/user/UserRepository';

export default async function seed() {
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
    const userCount = await user.count();
    if (userCount === 0) {
        try {
            const userData = await user.createUser(newUser);
            console.log('User Created', userData);
        }
        catch (err) {
            console.log('Error occured while creating user', err);
        }
    }
}
