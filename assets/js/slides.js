var slideKey = 0;
var slides = [
  React.createElement("div", {key: slideKey++}, 
    React.createElement("h1", null, "Sean Owiecki"), 
    React.createElement("h1", null, "Software Engineer"), 
    React.createElement("h4", null, "( back-end, front-end, UX, & UI )")
  ),
  React.createElement("div", null, 
    React.createElement("h3", null, "A little about me."), 
    React.createElement("p", null, "I'm passionate about creating and problem-solving, whether it be on back-end systems or front-end user experiences. I am restless when it comes to programming, constantly striving to solve problems while also giving a great deal of attention to the cleanliness and convention of my code. It's my goal to create things that are not just beneficial to my immediate needs, but useful, maintainable, and expandable by future coders in the community."), 

    React.createElement("p", null, "When I'm not coding, I'm ripping off the \"warranty void if tampered with\" stickers on my electronics. I enjoy customizing and getting the most performance out of software and hardware.")
  ),
  React.createElement("div", {key: slideKey++}, 
    React.createElement("h3", null, "My current project."), 
    React.createElement("a", {href: "http://atomic6.heroku.com", target: "_blank"}, 
      React.createElement("img", {id: "odyssey-preview", className: "preview"})
    ), 
    React.createElement("h4", {className: "project-title"}, "Odyssey"), 
    React.createElement("div", {className: "links"}, 
      React.createElement("a", {className: "project link", href: "https://github.com/Nase00/Odyssey", target: "_blank"}, "(source)"), " ", React.createElement("a", {className: "project link", href: "http://divvy-odyssey.heroku.com", target: "_blank"}, "(live)")
    ), 
    React.createElement("div", {className: "project-desc"}, 
      "My submission for the ", React.createElement("a", {href: "https://www.divvybikes.com/datachallenge", target: "_blank"}, "2015 Divvy Data Challenge"), ". Over 2 million trips are loaded into a graph database and served up by a Rails API." + ' ' + 
      "A single-page frontend powered by React and the Google Maps API visualizes the entire odyssey each individual bike took throughout Chicago over the course of an entire year."
    )
  ),
  React.createElement("div", {key: slideKey++}, 
  React.createElement("h3", null, "Some of my past work."), 
    React.createElement("a", {href: "http://beyondyourhorizon.heroku.com", target: "_blank"}, 
      React.createElement("img", {id: "horizon-preview", className: "preview"})
    ), 
    React.createElement("h4", {className: "project-title"}, "Horizon"), 
    React.createElement("div", {className: "links"}, 
      React.createElement("a", {className: "project link", href: "https://github.com/Nase00/Horizon", target: "_blank"}, "(source)"), " ", React.createElement("a", {className: "project link", href: "http://beyondyourhorizon.heroku.com", target: "_blank"}, "(live)")
    ), 
    React.createElement("div", {className: "project-desc"}, 
      "Interactive visualization of one's exposure to topics within their bubble of Twitter followees. Powered by Ruby on Rails and Neo4j. Built" + ' ' +
    "in 8 days during Phase 3 of Dev Bootcamp."
    )
  ),
  React.createElement("div", {key: slideKey++}, 
  React.createElement("h3", null, "Some more of my past work."), 
    React.createElement("a", {href: "http://atomic6.heroku.com", target: "_blank"}, 
      React.createElement("img", {id: "atomic6-preview", className: "preview"})
    ), 
    React.createElement("h4", {className: "project-title"}, "Atomic6"), 
    React.createElement("div", {className: "links"}, 
      React.createElement("a", {className: "project link", href: "https://github.com/Nase00/atomic6", target: "_blank"}, "(source)"), " ", React.createElement("a", {className: "project link", href: "http://atomic6.heroku.com", target: "_blank"}, "(live)")
    ), 
    React.createElement("div", {className: "project-desc"}, "Blog built using Sinatra, ActiveRecord, AJAX, and Underscore. Multi-user sessions with Bcrypt authorizations.")
  ),
  React.createElement("div", {key: slideKey++}, 
    React.createElement("h3", null, "Just a few of my skills."), 
    React.createElement("ul", null, 
      React.createElement("li", {className: "bulletize"}, React.createElement("b", null, "Languages:"), " Ruby, JavaScript, HTML5, CSS3"), 
      React.createElement("li", {className: "bulletize"}, React.createElement("b", null, "Databases:"), " Postgresql, Neo4j"), 
      React.createElement("li", {className: "bulletize"}, React.createElement("b", null, "Frameworks and Libraries:"), " Rails, jQuery, Underscore, React"), 
      React.createElement("li", {className: "bulletize"}, React.createElement("b", null, "Testing:"), " Rspec, Jasmine"), 
      React.createElement("li", {className: "bulletize"}, React.createElement("b", null, "Hardware:"), " Computer assembly and local networking")
    )
  ),
  React.createElement("div", {key: slideKey++}, 
    React.createElement("h3", null, "Past experience."), 
    React.createElement("ul", null, 
      React.createElement("li", {className: "bulletize"}, 
        React.createElement("h5", null, "Dev Bootcamp, Bluegills Cohort (September 2014 to January 2015)"), 
        React.createElement("div", null, "Intensive 18-week program focusing on Ruby on Rails and JavaScript. Completed several team and solo projects.")
      ), 
      React.createElement("li", {className: "bulletize"}, 
        React.createElement("h5", null, "Superior Air-Ground Ambulance Service, EMT-B (July 2012 to September 2014)"), 
        React.createElement("div", null, "Responsible for both patient care and driving lights & sirens. Worked in a huge variety of environments with countless different teams of people. My license is still valid and maintained.")
      ), 
      React.createElement("li", {className: "bulletize"}, 
        React.createElement("h5", null, "FedEx Ground, Linehaul Administration (July 2008 to July 2012)"), 
        React.createElement("div", null, "Managed equipment inventory, driver time sheets, and driver pickup times.")
      )
    )
  ),
  React.createElement("div", {key: slideKey++}, 
    React.createElement("h3", null, "Let's connect."), 
    React.createElement("img", {id: "me", src: "assets/images/me.png"}), 
    React.createElement("a", {className: "connect link", href: "mailto:seanowiecki@gmail.com", target: "_blank"}, "Email"), 
    React.createElement("a", {className: "connect link", href: "https://github.com/Nase00", target: "_blank"}, "Github"), 
    React.createElement("a", {className: "connect link", href: "https://www.linkedin.com/pub/sean-owiecki/a3/732/66b", target: "_blank"}, "LinkedIn")
  )
]
