const React = require('react');
const smoothScroll = require('smoothscroll');

const handleClick = (e, selector) => {
  const dst = document.querySelector(selector);
  if (!dst) { return; }
  smoothScroll(dst);
  e.preventDefault();
  e.stopPropagation();
};

const ScrollLink = ({ href, children }) => (
  <a href={href} onClick={(e) => handleClick(e, href)}>{children}</a>
);

module.exports = ScrollLink;
