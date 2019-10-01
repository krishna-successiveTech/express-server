import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public async count() {
        return await this.model.countDocuments();
    }
    public async findOne(query) {
        return await this.model.findOne(query);
    }

    public async createUser(data: any): Promise<D> {
        const id = this.generateObjectId();
        return await this.model.create({
            ...data,
            _id: id,
            orignalId: id,
        });
    }

    public async update(data: any) {
        const result = await this.findOne({ originalId: data._id, deletedAt: undefined });
        const userData = await this.createUser(Object.assign(result, { name: data.name, deleteAt: new Date() }));
        try {
            this.model.updateOne({ _id: userData._id }, { originalId: data._id }, (err) => {
                console.log('error');
            });
            this.model.updateOne({ _id: data._id },
                { $set: { deletedAt: true } }, { upsert: true }).then((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }

    }

    public async getUser(data: any) {
        return await this.model.findOne(data);
    }

    public async delete(data: any) {
        try {
            const userData = await this.model.updateOne({
                _id: data._id,
                deletedAt: { $exists: false },
            }, { deletedAt: Date.now() });
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
    }
}
