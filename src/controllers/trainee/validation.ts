const validation = {
    create: {
        id: {
            custom: {
                function(value) {
                    console.log('Value', value);
                },
            },
            in: ['body'],
            required: true,
            string: true,
        },
        name: {
            errorMessage: 'Name is required',
            in: ['body'],
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            required: true,
        },
    },
    delete: {
        id: {
            errorMessage: 'Id is required',
            in: ['params'],
            required: true,
        },
    },
    get: {
        limit: {
            default: 10,
            errorMessage: 'Limit is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
        skip: {
            default: 0,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
    },
    update: {
        dataToUpdate: {
            custom: {
                function(dataToUpdate) {
                    console.log('Inside DataToUpdate');
                },
            },
            in: ['body'],
            isObject: true,
            required: true,
        },
        id: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
};
export default validation;
