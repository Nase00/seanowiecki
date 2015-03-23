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
      var slide = [
        <div key="first-slide" id="slide">
        	First slide
        </div>,
        <div key="second-slide" id="slide">
        	Second slide
        </div>,
        <div key="third-slide" id="slide">
        	Third slide
        </div>,
        <div key="fourth-slide" id="slide">
        	Fourth slide
        </div>,
        <div key="fifth-slide" id="slide">
        	Fifth slide
        </div>,
        <div key="fifth-slide" id="slide">
        	Sixth slide
        </div>
        ,<div key="fifth-slide" id="slide">
        	Seventh slide
        </div>
      ][this.state.page]
      		
      var content = <SlideContainer key={this.state.page} data={slide} />
      return (
        <div>
	        <nav>
	        	{this.state.page === 0 ? null : <a key="previous-page" id="previous-page" href="#" onClick={this.previousPage}>Previous</a>}
	        	{this.state.page === AppLength ? null : <a key="next-page" id="next-page" href="#" onClick={this.nextPage}>Next</a>}
        	</nav>
          <ReactCSSTransitionGroup transitionName="slide">
            {content}
          </ReactCSSTransitionGroup>
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