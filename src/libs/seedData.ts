import UserRepository from '../repositories/user/UserRepository';

export default function seed() {
    const user = new UserRepository();

    user.createUser({
        email: 'krishna@krishna.com',
        id: '21',
        name: 'krishna',
        role: 'trainee',
    });
}
