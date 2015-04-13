var React = require('react/addons'),
    Shift = require('react-shift')
    pageKey = 0;

var nextAndPrev = {
      nextPage: "»",
      previousPage: "«"
    },
    fastLinks = {
      "Projects": 2,
      "Skills": 5,
      "Connect": 7
    }

React.render(
  <Shift nextAndPrev={nextAndPrev} fastLinks={fastLinks} transitions={true}>
    <div key={pageKey++}>
      <h1>Sean Owiecki</h1>
      <h1>Software Engineer</h1>
      <h4>( back-end, front-end, UX, & UI )</h4>
    </div>
    <div>
      <h3>A little about me.</h3>
      <p>
        I'm passionate about creating and problem-solving, whether it be on back-end systems or front-end user experiences.
        I am restless when it comes to programming, constantly striving to solve problems while also giving a great deal of attention to the cleanliness and convention of my code.
        It's my goal to create things that are not just beneficial to my immediate needs, but useful, maintainable, and expandable by future coders in the community.
      </p>
      <p>
        <strong>I contribute to open source.</strong> I'm currently developing a <a href="https://www.npmjs.com/package/react-shift" target="_blank">"Carousel" component in React</a>. It is based on the code I created to build this website.
      </p>
      <p>When I'm not coding, I'm ripping off the "warranty void if tampered with" stickers on my electronics and <a href="http://imgur.com/a/fOchn" target="_blank">building computers</a>. I enjoy customizing and getting the most performance out of software and hardware.</p>
    </div>
    <div key={pageKey++}>
      <h3>My latest application.</h3>
      <a href="http://divvy-odyssey.heroku.com" target="_blank">
        <img id="odyssey-preview" className="preview" />
      </a>
      <h4 className="project-title">Odyssey</h4>
      <div className="links">
        <a className="project link" href="https://github.com/Nase00/Odyssey" target="_blank">(source)</a> <a className="project link" href="http://divvy-odyssey.heroku.com" target="_blank">(live)</a>
      </div>
      <div className="project-desc">
        My submission for the <a href="https://www.divvybikes.com/datachallenge" target="_blank">2015 Divvy Data Challenge</a>, currently a finalist for "Most Creative." Over 2 million trips are loaded into a graph database and served up by a Rails API. 
        A single-page front-end powered by React and the Google Maps API visualizes the entire odyssey each individual bike took throughout Chicago over the course of an entire year.
      </div>
    </div>
    <div key={pageKey++}>
      <h3>Some of my past work.</h3>
        <a href="http://beyondyourhorizon.heroku.com" target="_blank">
          <img id="horizon-preview" className="preview" />
        </a>
        <h4 className="project-title">Horizon</h4>
        <div className="links">
          <a className="project link" href="https://github.com/Nase00/Horizon" target="_blank">(source)</a> <a className="project link" href="http://beyondyourhorizon.heroku.com" target="_blank">(live)</a>
        </div>
        <div className="project-desc">
          Interactive visualization of one's exposure to topics within their bubble of Twitter followees. Powered by Ruby on Rails and Neo4j. Built
        in 8 days during Phase 3 of Dev Bootcamp.
        </div>
    </div>
    <div key={pageKey++}>
      <h3>Some more of my past work.</h3>
      <a href="http://atomic6.heroku.com" target="_blank">
        <img id="atomic6-preview" className="preview" />
      </a>
      <h4 className="project-title">Atomic6</h4>
      <div className="links">
        <a className="project link" href="https://github.com/Nase00/atomic6" target="_blank">(source)</a> <a className="project link" href="http://atomic6.heroku.com" target="_blank">(live)</a>
      </div>
      <div className="project-desc">Blog built using Sinatra, ActiveRecord, AJAX, and Underscore. Multi-user sessions with Bcrypt authorizations.</div>
    </div>
    <div key={pageKey++}>
      <h3>Just a few of my skills.</h3>
      <ul>
        <li className="bulletize"><b>Languages:</b> Ruby, JavaScript, HTML5, CSS3</li>
        <li className="bulletize"><b>Databases:</b> Postgresql, Neo4j</li>
        <li className="bulletize"><b>Frameworks and Libraries:</b> Rails, jQuery, Underscore, React</li>
        <li className="bulletize"><b>Testing:</b> Rspec, Jasmine</li>
        <li className="bulletize"><b>Other:</b> Git, Rake, Grunt</li>
      </ul>
    </div>
    <div key={pageKey++}>
      <h3>Past experience.</h3>
      <ul>
        <li className="bulletize">
          <h5>Dev Bootcamp, Bluegills Cohort (September 2014 to January 2015)</h5>
          <div>Intensive 18-week program focusing on Ruby on Rails and JavaScript. Completed several team and solo projects.</div>
        </li>
        <li className="bulletize">
          <h5>Superior Air-Ground Ambulance Service, EMT-B (July 2012 to September 2014)</h5>
          <div>Responsible for both patient care and driving lights & sirens. Worked in a huge variety of environments with countless different teams of people. My license is still valid and maintained.</div>
        </li>
        <li className="bulletize">
          <h5>FedEx Ground, Linehaul Administration (July 2008 to July 2012)</h5>
          <div>Managed equipment inventory, driver time sheets, and driver pickup times.</div>
        </li>
      </ul>
    </div>
    <div key={pageKey++}>
      <h3>Let's connect.</h3>
      <img id="me" src="assets/images/me.png" />
      <a className="connect link" href="mailto:seanowiecki@gmail.com" target="_blank">Email</a>
      <a className="connect link" href="https://www.linkedin.com/pub/sean-owiecki/a3/732/66b" target="_blank">LinkedIn</a>
      <a className="connect link" href="https://github.com/Nase00" target="_blank">Github</a>
      <a className="connect link" href="https://www.npmjs.com/~nase" target="_blank">npm</a>
    </div>
  </Shift>,
  document.getElementById("anchor")
);