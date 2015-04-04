/**
 * @jsx React.DOM
 */

// Dependencies
var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		ReactTransitionGroup = React.addons.TransitionGroup,
    slides = require('./slides.jsx'),
		AppLength = slides.length - 1
    paginationArray = Array.apply(null, {length: AppLength + 1}).map(Number.call, Number);

// Set pages
var projectPage = 2,
    skillsPage = 5,
    connectPage = AppLength;

// Carousel
var Slide = React.createClass({
  	getInitialState: function() {
      return {
        mounted: false,
        page: 0,
        previousPage: 0
      };
    },
    componentDidMount: function() {
      this.setState({
        mounted: true
      });
    },
    nextPage: function() {
      this.setState({previousPage: this.state.page});
    	this.state.page === AppLength ? null : this.setState({page: this.state.page + 1});
    },
    previousPage: function() {
      this.setState({previousPage: this.state.page});
    	this.state.page === 0 ? null : this.setState({page: this.state.page - 1});
    },
    skipToPage: function(n) {
      this.setState({page: n});
    },
    render: function() {
      var self = this,
          key = 0,
          filler =
            <span className="nav-arrow noclick">{"\u00a0"}</span>,
          leftArrow =
            this.state.page === 0 ? filler : <a key="previous-page" id="previous-page" className="nav-arrow nav-left noselect" href="#" onClick={this.previousPage}>«</a>,
          rightArrow =
           this.state.page === AppLength ? filler : <a key="next-page" id="next-page" className="nav-arrow nav-right noselect" href="#" onClick={this.nextPage}>»</a>,
          diamond =
            <span className="diamond noselect">◆</span>
          pagination =
            <span id="page-numbers" className="noselect">
              {paginationArray.map(function(n) {
                return n == self.state.page ? <a key={n} className="current-page" href="#">{n + 1}</a> : <a key={n} href="#" onClick={self.skipToPage.bind(null, n)}>{n + 1}</a>
              })}
            </span>
          navigation =
            <nav>
              {leftArrow, pagination, rightArrow}
            </nav>,
          fastNav =
            <nav className="fast-nav">
              <a key="project-page" id="project-page" className="noselect" href="#" onClick={this.skipToPage.bind(this, projectPage)}>Projects</a>
              {diamond}
              <a key="skills-page" id="skills-page" className="noselect" href="#" onClick={this.skipToPage.bind(this, skillsPage)}>Skills</a>
              {diamond}
              <a key="connect-page" id="connect-page" className="noselect" href="#" onClick={this.skipToPage.bind(this, connectPage)}>Connect</a>
            </nav>;

      return (
        <div id="wrapper">
          <header>
            {fastNav}
          </header>
          <div id="page">
            <div id="slide">
              <ReactCSSTransitionGroup transitionName={this.state.page >= this.state.previousPage ? "slide-left" : "slide-right"}>
                {slides[this.state.page]}
              </ReactCSSTransitionGroup>
            </div>
          </div>
          <footer>
            {navigation}
          </footer>
        </div>
      );
    }
  });

React.render(<Slide/>, document.getElementById("anchor"));