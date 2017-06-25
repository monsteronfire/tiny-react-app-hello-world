const React = require('react');

class Hello extends React.Component {
  render() {
    return (
      <div>Hello {this.props.subject}</div>
    )
  }
}

module.exports = Hello;
