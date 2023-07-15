import _ from 'lodash';

const data = [
  {
    username: 'Mateo',
    role: 'Student',
  },
  {
    username: 'Yesica',
    role: 'Teacher',
  },
  {
    username: 'Daniel',
    role: 'Warrior',
  },
  {
    username: 'Kevin',
    role: 'Student',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
