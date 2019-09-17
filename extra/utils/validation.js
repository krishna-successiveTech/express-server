var users = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech',
}, {
  traineeEmail: 'trainee1@succsive.tech',
  reviewerEmail: 'reviewer1@succsive.tech',
}];

function validateEmail(email) {
  let regex = RegExp("^[A-Za-z0-9._%+-]+@successive.tech$");
  return regex.test(email);
}

let validUsers = [];
let invalidUsers = [];

function validateUsers(users) {
  users.forEach(userEmail => {
    const {
      traineeEmail,
      reviewerEmail
    } = userEmail;
    validateEmail(traineeEmail) && validateEmail(reviewerEmail) ? validUsers.push(userEmail) : invalidUsers.push(userEmail);
  });


  console.log(validUsers.length == 0 ? "No Valid Users count=>" + validUsers.length : JSON.stringify(validUsers) + " count=>" + validUsers.length);
  console.log(invalidUsers.length == 0 ? "No in valid user and count=>" + invalidUsers.length : JSON.stringify(invalidUsers) + " count=>" + invalidUsers.length);
}


validateUsers(users);

