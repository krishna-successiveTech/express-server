import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public count() {
        return this.model.countDocuments();
    }
    public findOne(query) {
        return this.model.findOne(query).lean();
    }

    public createUser(data: any): Promise<D> {
        const id = this.generateObjectId();
        return this.model.create({
            ...data,
            _id: id,
            orignalId: id,
        });
    }

    public update(data: any) {
        return this.findOne({ originalId: data._id, deletedAt: undefined }).lean().then((result) => {
            this.createUser(Object.assign(result, { name: data.name, deleteAt: new Date() })).then((result1) => {
                this.model.updateOne({ _id: result1._id }, { originalId: data._id }, (err) => {
                    console.log('error');
                });
            });
            this.model.updateOne({ _id: data._id },
                { $set: { deletedAt: true } }, { upsert: true }).then((err) => {
                    console.log(err);
                });
        });
    }

    public getUser(data: any) {
        return this.model.findOne(data);
    }

    public delete(data: any) {
        return this.model.updateOne({
            _id: data._id,
            deletedAt: { $exists: false },
        },
            { deletedAt: Date.now() })
            .then((userData) => {
                console.log(userData);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
