const React = require('react');

class BlogSection extends React.Component {

  render () {
    return (
      <div className="BlogSection">
        <div className="BlogSection__Header">
          <h2 className="BlogSection__Title">
            <img className="BlogSection__TitleImage" src="/img/logo_blog960.png" alt="Kyoto.js Blog"/>
          </h2>

          <h3 className="BlogSection__SubTitle">
            <a className="Highlight" href="//blog.javascript.kyoto/">blog.javascript.kyoto</a>
          </h3>
        </div>

        <div className="BlogSection__Cells">
          <div className="BlogSection__Cell">
            <p>
              Kyoto.js Blog reports out meetups.
              If you are interested, please tell us and write posts about JavaScript!!
            </p>
            <p>
              blog.javascript.kyoto is powered by <a href="http://hatenablog.com/">Hatena Blog</a>.
            </p>
          </div>
          <div className="BlogSection__Cell">
            <a href="http://blog.javascript.kyoto">
              <img src="/img/blog_screenshot.png" alt="Kyoto.js Blog Screenshot"/>
            </a>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = BlogSection;
