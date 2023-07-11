const user = {
  userName: "Drifter",
  age: 18,
  country: "CO",
};

const { userName, ...values } = user;
console.log(userName);
console.log(values);
