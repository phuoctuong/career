# Sample Project Configuration
This project is a React/Redux application using ES2015/ES6 synxtax via [Babel](http://babeljs.io/) and other technologies as follows:
- [React](https://facebook.github.io/react/docs/getting-started.html) - View
- [Redux](http://redux.js.org/) - Pattern for state management
  - [React Redux](https://github.com/rackt/react-redux) - Implemenation Redux in React Application
  - [Redux Devtools](https://github.com/gaearon/redux-devtools) - Extension for debugging state redux
- [Flow](https://flow.org/en/docs/getting-started/) - Static type checker for Javascript code
- [Jest](https://facebook.github.io/jest/) - Write Tests all Javascript code including React applications
- [Eslint](https://eslint.org/)- Check eslint for react and flowtype
- [Webpack](https://webpack.js.org/) - Handle hot module reload


# How to use it
This project is using docker configuration and webpack as well. By the way, this project is also configured by flow-typed, eslint and jest already but I am still not use `flow-typed` or `jest` here yet.
First of all, let's `npm install` to install all packages as needed
You can use `npm run dev` command to run on local with 8080 port
In addition to `npm run dev` command, you also be able to use `docker-compose up dev` to start on local.
Finally, open `localhost:8080` url to see result.