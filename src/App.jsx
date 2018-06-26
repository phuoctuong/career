import React from 'react';
import ButtonUpdate from 'components/ButtonUpdate';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Header App Title: </h1>
        <ButtonUpdate title="Button Update" />
      </div>
    );
  }
}
