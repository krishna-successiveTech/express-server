const GET_USERS = "getUsers";
const HEAD_TRAINER = "head-trainer";
const TRAINEE = "trainee";
const TRAINER = "trainer";

const permissions = {
  GET_USERS: {
    all: [HEAD_TRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
export { GET_USERS, HEAD_TRAINER, TRAINEE, TRAINER, permissions };