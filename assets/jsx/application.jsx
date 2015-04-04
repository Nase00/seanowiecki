/**
 * @jsx React.DOM
 */

var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		ReactTransitionGroup = React.addons.TransitionGroup,
    slides = require('./slides.jsx'),
		AppLength = slides.length - 1;

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
    projectPage: function() {
      this.setState({page: 2});
    },
    skillsPage: function() {
      this.setState({page: 5});
    },
    connectPage: function() {
      this.setState({page: AppLength});
    },
    render: function() {
      var key = 0,
          filler = <span className="nav-arrow noclick">{"\u00a0"}</span>,
          content =
            <ReactCSSTransitionGroup transitionName={this.state.page >= this.state.previousPage ? "slide-left" : "slide-right"}><SlideContainer key={this.state.page} data={slides[this.state.page]} /></ReactCSSTransitionGroup>,
          leftArrow =
            this.state.page === 0 ? filler : <a key="previous-page" id="previous-page" className="nav-arrow nav-left noselect" href="#" onClick={this.previousPage}>«</a>,
          rightArrow =
           this.state.page === AppLength ? filler : <a key="next-page" id="next-page" className="nav-arrow nav-right noselect" href="#" onClick={this.nextPage}>»</a>,
          diamond =
            <span className="diamond noselect">◆</span>
          navigation =
            <nav>
              {leftArrow} <span id="page-number" className="noselect">{this.state.page + 1}</span> {rightArrow}
            </nav>,
          fastNav =
            <nav className="fast-nav">
              <a key="project-page" id="project-page" className="diamond noselect" href="#" onClick={this.projectPage}>Projects</a>
              {diamond}
              <a key="skills-page" id="skills-page" className="diamond noselect" href="#" onClick={this.skillsPage}>Skills</a>
              {diamond}
              <a key="connect-page" id="connect-page" className="diamond noselect" href="#" onClick={this.connectPage}>Connect</a>
            </nav>;

      return (
        <div id="wrapper">
          <header>
            {fastNav}
          </header>
          <div id="page">
            <div>
              
                {content}
              
            </div>
          </div>
          <footer>
            {navigation}
          </footer>
        </div>
      );
    }
  });

var SlideContainer = React.createClass({
  getInitialState: function() {
    return {
      mounted: false
    };
  },
  render: function() {
    return (
      <div id="slide">{this.props.data}</div>
    );
  }
})

React.render(<Slide/>, document.getElementById("anchor"));