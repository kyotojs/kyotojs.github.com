const React = require('react');

class MeetupSection extends React.Component {

  render () {
    return (
      <div className="MeetupSection">
        <div className="MeetupSection__Header">
          <h2 className="MeetupSection__Title">
            <img className="BlogSection__TitleImage" src="/img/logo_meetup960.png" alt="Kyoto.js Meetup"/>
          </h2>

          <h3 className="MeetupSection__SubTitle">
            Talk about JavaScript!
          </h3>
        </div>

        <div className="MeetupSection__Cells">
          <div className="MeetupSection__Cell">
            <h4>Next: <a className="Highlight" href="http://kyotojs.connpass.com/event/39462/">Kyoto.js 11</a></h4>
            <ul>
              <li>Time: 2016-10-22 (Sat) 13:00</li>
              <li>Place: Hatena 9F, Kyoto</li>
            </ul>
            See <a href="http://kyotojs.connpass.com/event/39462/">event page</a> for details!
          </div>
          <div className="MeetupSection__Cell">
            <h4>Past Meetups</h4>
            <ul>
              <li><a href="https://kyotojs.doorkeeper.jp/events/42568">Kyoto.js #10</a></li>
              <li><a href="https://kyotojs.doorkeeper.jp/events/37515">Kyoto.js #9</a></li>
              <li><a href="https://kyotojs.doorkeeper.jp/events/10869">Kyoto.なんか</a></li>
            </ul>
            <p>
              See <a href="https://kyotojs.doorkeeper.jp/events/past">DoorKeeper</a> for more details.
            </p>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = MeetupSection;
