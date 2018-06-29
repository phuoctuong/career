const baseUrl = 'https://api.github.com/users';

const getUsers = (userName) => {
  return $.ajax(`${baseUrl}/${userName}`);
};

export default {
  getUsers
};
