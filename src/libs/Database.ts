import * as mongoose from 'mongoose';
import seed from './seedData';
export default class Database {

    public static open(mongoUri) {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(
                    mongoUri,
                    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
                )
                .then(() => {
                    console.log('Successfully Connected to Db');
                    seed();
                    resolve();
                })
                .catch((err) => {
                    console.log('Error Connecting to Db');
                    reject(err);
                });
        });
    }

    public static disconnect() {
        mongoose.disconnect();
        console.log('Successfully Disconnected to Db');
    }
}
