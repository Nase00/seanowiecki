var React = require('react/addons'),
    Shift = require('react-shift'),
    pagesArray = require('./slides.jsx')

var shiftOptions = {
  nextPage: "»",
  previousPage: "«",
  fastLinks: {
    "Projects": 2,
    "Skills": 5,
    "Connect": 7
  }
}

React.render(
  <Shift options={shiftOptions} pages={pagesArray}/>,
  document.getElementById("anchor")
);