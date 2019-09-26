import UserRepository from '../repositories/user/UserRepository';

export default function seed() {
    const user = new UserRepository();
    user.count().then((res) => {
        if (res === 0) {
            user.createUser({
                email: 'krishna222@krishna.com',
                id: '212',
                name: 'krishna',
                role: 'trainee',
            });
            user.createUser({
                email: 'krishna111@krishna.com',
                id: '211',
                name: 'krishna',
                role: 'trainer',
            });
        }
    });
}
