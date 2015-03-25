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
          slides = [
            <div>
            	First slide
            </div>,
            <div>
            	Second slide
            </div>,
            <div>
            	Third slide
            </div>,
            <div>
            	Fourth slide
            </div>,
            <div>
            	Fifth slide
            </div>,
            <div>
            	Sixth slide
            </div>,
            <div>
            	Seventh slide
            </div>
          ][this.state.page]
      		
      var content = <SlideContainer key={this.state.page} data={slides} />
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
        <div id="slide">{this.props.data}</div>
      );
    }
  })

	React.render(<Slide/>, document.getElementById("slides"));