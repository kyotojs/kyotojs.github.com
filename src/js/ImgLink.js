const React = require('react');

class ImgLink extends React.PureComponent {

  static propTypes = {
    href : React.PropTypes.string.isRequired,
    alt  : React.PropTypes.string.isRequired,
    src  : React.PropTypes.string.isRequired,
  };

  render () {
    const {href, alt, src} = this.props;
    return (
      <a href={href} style={{ display: 'block', maxWidth: '100%' }}>
        <img src={src} alt={alt} style={{ width: '100%' }}/>
      </a>
    );
  }

}

module.exports = ImgLink;
