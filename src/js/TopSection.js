const React = require('react');
const ImgLink = require('./ImgLink');

class TopSection extends React.Component {

  render () {
    return (
      <div className="TopSection">
        <div className="TopSection__Header">
          <h1 className="TopSection__Title">
            <ImgLink href="/" src="/img/logo960.png" alt="Kyoto.js"/>
          </h1>
          <h3 className="TopSection__SubTitle">
            JavaScript Community in Kyoto
          </h3>
        </div>

        <div className="TopSection__Cells">
          <div className="TopSection__Cell">
            <a className="Link--Slack" href="#slack">
              <img src="/img/slack.png"/>
              <span>Slack</span>
            </a>
          </div>
          <div className="TopSection__Cell">
            <a className="Link--Meetup" href="#meetup">
              <img src="/img/meetup.png"/>
              <span>Meetup</span>
            </a>
          </div>

          <div className="TopSection__Cell">
            <a className="Link--Blog" href="#blog">
              <img src="/img/blog.png"/>
              <span>Blog</span>
            </a>
          </div>
        </div>

      </div>
    );
  }

}

module.exports = TopSection;
