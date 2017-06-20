const React  = require('react');
const Header = require('./Header');
const Main   = require('./Main');
const Footer = require('./Footer');

class App extends React.Component {

  render () {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }

}

module.exports = App;
