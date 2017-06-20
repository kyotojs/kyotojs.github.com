const React = require('react');
const ScrollLink = require('./ScrollLink');


class Header extends React.Component {

  render () {
    return (
      <header className="Header">
        <h4 className="Header__Logo">
          <a href="/">
            <img src="/img/logo120_white.png"/>
          </a>
        </h4>

        <nav className="Header__Navigation">
          <ul className="Header__Navigation__Links">
            <li className="Header__Navigation__Link">
              <ScrollLink href="#slack">
                <img src="/img/slack.png"/>
                <span>Slack</span>
              </ScrollLink>
            </li>
            <li className="Header__Navigation__Link">
              <ScrollLink href="#meetup">
                <img src="/img/meetup.png"/>
                <span>Meetup</span>
              </ScrollLink>
            </li>
            <li className="Header__Navigation__Link">
              <ScrollLink href="#blog">
                <img src="/img/blog.png"/>
                <span>Blog</span>
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

}

module.exports = Header;
