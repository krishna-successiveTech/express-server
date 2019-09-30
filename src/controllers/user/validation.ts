import { validateEmail } from '../../../extraTs/utils/helper';

const validation = {
  create: {
    email: {
      custom: (email: string) => {
        if (!validateEmail(email)) {
          throw new Error('Please enter email correct format');
        }
      },
      errorMessage: 'Email is required',
      in: ['body'],
      required: true,
      string: true,
    },
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
  login: {
    email: {
      custom: (email: string) => {
        if (!validateEmail(email)) {
          throw new Error('Please enter email correct format');
        }
      },
      errorMessage: 'Email is required',
      in: ['body'],
      required: true,
      string: true,
    },
    password: {
      custom: {
        function(value) {
          console.log('Value', value);
        },
      },
      in: ['body'],
      required: true,
      string: true,
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
