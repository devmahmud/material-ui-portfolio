import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "19.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase"
  },
  body1: {
    color: "tomato"
  },
  subtitle1: {
    color: "tan"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Current
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Lead
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Invesco , Boston - MA
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Created and developed Responsive UI using Material UI and React
                with ES6.Consumed web API’s using axios and fetch API, provided
                client-side state management using redux thunks.• Worked on
                Performance bottle necks on front end and flask layer. Involved
                in integration of AWS Cognito for front end authentication and
                provide multi factor authentication.
              </li>
              <li>
                Managed a team of 4 engineers and was responsible for their
                mentorship, growth performance evaluation and job
                satisfaction.Co-ordinated the product roadmap between the site
                to Improve quality, consistency and client satisfaction
              </li>

              <li>
                Designed, developed solutions in form of POC to improve business
                functionality and later integrated as an solution within product
                using React, AWS Service, Python and JavaScript.Implemented the
                localization and internationalization using i18 next and used
                babel for various multiple languages support.
              </li>
              <li>
                Created and Developed UI automation using Puppeteer and created
                unit test using Jest.Developed and provided analytics feedback,
                reports using Sentry and App Dynamics and react 16
                integrations.Developed and implemented routes and API
                integration on Python Flask Layer.
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          style={{ width: 800 }}
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Dec 2018 - Sep 2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            UI Architect
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Comcast , PA
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <div style={{ fontSize: 20, color: "white", marginTop: 5 }}>
              Buy Flow
            </div>
            <ul>
              <li>
                Created reusable libraries using vanillas JavaScript and ES 6
                features. Designed, developed components using react JS and ES6
                babel trans pilers.Implemented efficiencies and structure in
                engineering process and standard to drive consistent delivery of
                quality development.
              </li>
              <li>
                Oversaw collaborative development of professionalizing
                experiences includes workshops, training and continuing
                education in building scalable system .Consumed web API’s using
                axiom and fetch API, provided client-side state management using
                redux sagas.
              </li>
              <li>
                Usage of redux forms for form validation and managing form
                components and states.Usage of Jest and expect library to
                provide unit testing of components and helper classes. Developed
                automated end to end testing using Selenium, Java and Gherkin’s
                programming language.
              </li>
            </ul>
            <div style={{ color: "white", fontSize: 20, marginTop: 5 }}>
              My Plan
            </div>
            <ul>
              <li>
                Configured Web pack to execute linters, magnifiers,
                pre/post-processors, tests, transpires, etc. based on build
                target. Used React JS for templating for faster compilation and
                developing reusable components.
              </li>
              <li>
                Implemented React container and presentational components (as
                Stateless and Functional components when applicable). Guided,
                supported and assisted the engineering department to meet the
                project deadlines.
              </li>
              <li>
                Usage of reselect library to memorize the derived data for
                faster processing by using memorized selector. Set up mock
                response and mock node servers to respond to end points with
                mock data. Provided end to end testing using nightwatch.js which
                provided ability to take screen shot use various xpath selectors
                and class selectors to identify the elements and automate the
                whole flow
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Dec 2015 - Dec 2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Engineering Manager
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            New Jerssey Manufacturer Insurance Group - Time Tracking System
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Developed, designed responsive and cross browser UI platform
                using react js, redux and ES6 babel trans pilers. Manage a team
                of 10 engineers. Be responsible for their hiring, mentorship,
                growth, coaching and job satisfaction. Evaluated project
                estimations. Subcontractor scope of work, changes orders. Work
                closely with non-technical management to establish a product
                roadmap.
              </li>
              <li>
                Mentor junior software developers providing them with knowledge
                and best practices and techniques. Consumed web API’s using
                redux thunks. Worked with web pack for module bundling and
                managed task runners using npm scripts. Working with React
                Router for developing Single Page Applications Spas. Experienced
                in developing React components. Used Axioms with Reacts for
                making AJAX Calls. Worked on Web pack for build and web
                pack-dev-server a server.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Architect
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            New Jerssey Manufacturer Insurance Group -Quote and Buy Auto
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Responsible for developing UI pages using AngularJS, HTML5,
                CSS3, JavaScript, jQuery, AJAX and JSON. Developed responsive
                web pages for smart devices using Bootstrap and media queries.
              </li>
              <li>
                Managed a team of 10 software engineers including task planning
                and code reviews. Provided direct and ongoing leadership for any
                engagement or new initiatives. Provided technical and strategic
                vision for team’s deliverables , as well as day to day
                operational leadership.
              </li>
              <li>
                Used AngularJS as framework to create Single Page Applications
                which can bind data to specific views and synchronize data with
                server. Created custom directives and filters using AngularJS
                built-in $http service from controller through dependency
                injection. Created Angular service and integration with RESTful
                APIs.
              </li>
              <li>
                Used Angular $http to send GET/POST request to fetch data from
                server. Used open-source library like Angular material to create
                customized components. Worked with Grunt for task runner
                configurations for minification, watch, jshint, jscs, css
                autoprefixer, and sass compilation, bundling and test runner
                configurations and make it available as a command.
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Aug 2009 - Dec 2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Engineering Manager
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bank of America - Relationship Pricing
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Developed responsive web pages for smart devices using Bootstrap
                and media queries .Managed a multiple team with overall strength
                of 15 resources including setting objectives, reviewing
                performances and establishing positive working environment.
              </li>
              <li>
                Cross train a professional team of 10 + employees on software
                development using C#, Asp.net, MVC, Angular JS, Web API,
                JavaScript Used AngularJS as framework to create Single Page
                Applications which can bind data to specific views and
                synchronize data with server.
              </li>
              <li>
                Worked on creating log-in authentication modules using AngularJS
                and JavaScript. Extensively worked on custom directives with
                Pop-over and Pop-up functionalities with specific requirements
                matched to the conditions. Used UI Router to create different
                hierarchy structure in single page application. Worked with
                Karma and Jasmine, supporting QA team to debug and write tests
              </li>
            </ul>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Lead
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bank of America - Fame 529 Accounts
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Designed and maintained front-end page layout using HTML, CSS
                Lead and grow strong software engineering team of developers ,
                testers focusing on hiring, mentoring and performance management
                and career planning Used JavaScript to handle the basic logics
                and bind the Event Handlers.
              </li>
              <li>
                Created Responsive Web Design using Bootstrap and CSS Media
                Queries. Created Navigation bar, Dropdown menu, Image Carousel,
                Button, Modal, Form, Table, Toggl able tabs, Pagination using
                Bootstrap. Handled Cross Browser Compatibility Issues and
                Unified CSS Layout across various browsers and platforms such as
                Internet Explorer, Mozilla Firefox, Google Chrome and Opera.
              </li>
              <li>
                Utilized AngularJS UI-Route for managing the State Transition
                and URL route. Utilized AngularJS dependency injection to inject
                different services just like custom service, and create some
                custom directives to do some reusable component. To do the
                asynchronously fetch data from backend to the frontend by using
                promise which include $http and $q service.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
