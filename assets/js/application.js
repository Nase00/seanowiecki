var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    ReactTransitionGroup = React.addons.TransitionGroup,
    AppLength = slides.length - 1;

var Slide = React.createClass({displayName: "Slide",
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
          filler = React.createElement("span", {className: "nav-arrow noclick"}, "\u00a0"),
          content =
            React.createElement(SlideContainer, {key: this.state.page, data: slides[this.state.page]}),
          leftArrow =
            this.state.page === 0 ? filler : React.createElement("a", {key: "previous-page", id: "previous-page", className: "nav-arrow", href: "#", onClick: this.previousPage}, "«"),
          rightArrow =
            this.state.page === AppLength ? filler : React.createElement("a", {key: "next-page", id: "next-page", className: "nav-arrow", href: "#", onClick: this.nextPage}, "»"),
          navigation =
            React.createElement("nav", null, leftArrow, rightArrow), 
          fastNav =
            React.createElement("nav", {className: "fast-nav"}, 
              React.createElement("a", {key: "project-page", id: "project-page", href: "#", onClick: this.projectPage}, "Projects"), 
              React.createElement("span", {className: "diamond"}, "◆"), 
              React.createElement("a", {key: "skills-page", id: "skills-page", href: "#", onClick: this.skillsPage}, "Skills"), 
              React.createElement("span", {className: "diamond"}, "◆"), 
              React.createElement("a", {key: "connect-page", id: "connect-page", href: "#", onClick: this.connectPage}, "Connect")
            );

      return (
        React.createElement("div", {id: "wrapper"}, 
          React.createElement("header", null, 
            fastNav,
            navigation
          ), 
          React.createElement("div", {id: "page"}, 
            React.createElement("div", null, 
              React.createElement(ReactCSSTransitionGroup, {transitionName: content.key >= this.state.previousPage ? "slide-left" : "slide-right"}, 
                content
              )
            )
          ), 
          React.createElement("footer", null, 
            navigation
          )
        )
      );
    }
  });
  var SlideContainer = React.createClass({displayName: "SlideContainer",
    getInitialState: function() {
      return {
        mounted: false
      };
    },
    render: function() {
      return (
        React.createElement("div", {id: "slide"}, this.props.data)
      );
    }
  })

React.render(React.createElement(Slide, null), document.getElementById("anchor"));
