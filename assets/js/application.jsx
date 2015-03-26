var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		ReactTransitionGroup = React.addons.TransitionGroup,
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
    render: function() {
      var key = 0,
          filler = <span className="nav-arrow noclick">{"\u00a0"}</span>,
          content =
            <SlideContainer key={this.state.page} data={slides[this.state.page]} />,
          navigation =
            <nav>
              {this.state.page === 0 ? {filler} : <a key="previous-page" id="previous-page" className="nav-arrow" href="#" onClick={this.previousPage}>«</a>}
              {this.state.page === AppLength ? {filler} : <a key="next-page" id="next-page" className="nav-arrow" href="#" onClick={this.nextPage}>»</a>}
            </nav>;

      return (
        <div id="wrapper">
          <header>
            {navigation}
          </header>
          <div id="page">
            <div>
              <ReactCSSTransitionGroup transitionName={content.key >= this.state.previousPage ? "slide-left" : "slide-right"}>
                {content}
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