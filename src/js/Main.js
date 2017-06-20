const React         = require('react');
const TopSection    = require('./TopSection');
const SlackSection  = require('./SlackSection');
const MeetupSection = require('./MeetupSection');
const BlogSection   = require('./BlogSection');

class Main extends React.Component {

  render () {
    return (
      <div className="Main">
        <section id="top" className="Main__TopSection">
          <TopSection/>
        </section>

        <section id="slack" className="Main__Section">
          <SlackSection/>
        </section>

        <section id="meetup" className="Main__Section">
          <MeetupSection/>
        </section>

        <section id="blog" className="Main__Section">
          <BlogSection/>
        </section>
      </div>
    );
  }

}

module.exports = Main;
