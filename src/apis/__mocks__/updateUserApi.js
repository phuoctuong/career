const Users = {
  0: {
    name: 'Mock A',
    age: 10
  },
  1: {
    name: 'Mock B',
    age: 20
  },
  2: {
    name: 'Mock C',
    age: 30
  }
};

const updateUserApi = (type) => {
  return new Promise((resolve, reject) => {
    if (Users[type]) {
      resolve(Users[type]);
    } else {
      reject('Users can not found');
    }
  });
};

export default updateUserApi;
