const React = require('react');

class SlackSection extends React.Component {

  render () {
    return (
      <div className="SlackSection">
        <div className="SlackSection__Header">
          <h2 className="SlackSection__Title">
            <img className="BlogSection__TitleImage" src="/img/logo_slack960.png" alt="Kyoto.js Slack"/>
          </h2>

          <h3 className="SlackSection__SubTitle">
            Get Invitation <a className="Highlight" href="//kyotojs.herokuapp.com/">HERE!</a>
          </h3>
        </div>

        <div className="SlackSection__Cells">
          <div className="SlackSection__Cell">
            <h4>We talk about...</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript, flowtype</li>
              <li>React, Angular, Vue</li>
              <li>CSS, Sass, PostCSS</li>
            </ul>
            <p className="andMore">
              ...and more!
            </p>
          </div>
          <div className="SlackSection__Cell">
            <h4>Members</h4>
            <p>
              59 people joined now!
            </p>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = SlackSection;
