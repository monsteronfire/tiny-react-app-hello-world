const React = require('react');
const Hello = require('./Hello');

class App extends React.Component {
  render() {
    return (
      <Hello subject="World"/>
    )
  }
}

module.exports = App;
