const React = require('react');
const { render } = require('react-dom');
const Shift = require('react-shift').default;
const pageKey = 0;

const nextAndPrev = {
  next: '',
  previous: ''
};

const classes = {
  wrapper: 'react-shift-wrapper',
  navigation: 'react-shift-navigation',
  page: 'react-shift-page',
  pagination: 'react-shift-pagination',
  currentPage: 'react-shift-current-page',
  fastLinks: 'react-shift-fast-links',
  navArrow: 'react-shift-nav-arrow',
  nextPage: 'react-shift-next-page',
  previousPage: 'react-shift-prev-page'
};

const node = document.getElementById('anchor');

render(
  <Shift arrowLabels={nextAndPrev} classes={classes} transitions={true}>
    <div>
      <a className="connect link" href="mailto:seanowiecki@gmail.com" target="_blank">Email</a>
      <a className="connect link" href="https://www.linkedin.com/pub/sean-owiecki/a3/732/66b" target="_blank">LinkedIn</a>
      <a className="connect link" href="https://github.com/Nase00" target="_blank">Github</a>
      <a className="connect link" href="https://bitbucket.org/seanowiecki" target="_blank">BitBucket</a>
      <a className="connect link" href="https://www.npmjs.com/~nase" target="_blank">npm</a>
    </div>
    <div/>
  </Shift>,
  node
);
