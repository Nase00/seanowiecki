var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		ReactTransitionGroup = React.addons.TransitionGroup,
		AppLength = 6

var Slide = React.createClass({
		getInitialState: function() {
      return {
        mounted: false,
        page: 0
      };
    },
    componentDidMount: function() {
      this.setState({
        mounted: true
      });
    },
    nextPage: function() {
    	this.state.page === AppLength ? null : this.setState({page: this.state.page + 1});
    },
    previousPage: function() {
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
        <div id="page">
	        {navigation}
          <div className="title slide">
            <ReactCSSTransitionGroup transitionName="slide">
              {content}
            </ReactCSSTransitionGroup>
          </div>
          {navigation}
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
        <div>{this.props.data}</div>
      );
    }
  })

	React.render(<Slide/>, document.getElementById("slides"));