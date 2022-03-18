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

const Achievements = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Achievements & Awards
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Box component="div" className={classes.timeLineItem}>
          <ul>
            <li>
              Received an "On the Sport Award” for MSRB project for quick
              turnaround, secured and feasible implementation. Received an "On
              the Spot Award" for RP and Money Movement project in TCS.
              Appreciated and gave me recognition on implementation of Web
              Sphere ILog rules for Dot Net from Management.
            </li>
            <li>
              India Infoline Ltd has entitled me as "New Face of the Year" Award
              for my work. Developed an intelligent and innovative solution has
              per the company standards.
            </li>

            <li>
              Participated in Bank of America Tech Thon Function, in which idea
              and concept of "Smart Wallet" was awarded first prize.
            </li>
            <li>
              Acquired Patent with TCS, DB Deployment Suite which was recognized
              and appreciated by TCS at the organization level.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievements;
