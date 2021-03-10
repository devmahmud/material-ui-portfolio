import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<GitHubIcon />}
        className={classes.root}
        target="_blank"
        href="https://github.com/TylerPMatthews"
      />
      <BottomNavigationAction
        icon={<LinkedInIcon />}
        className={classes.root}
        target="_blank"
        href="https://www.linkedin.com/in/🖥-tyler-matthews📱-065a411b3/"
      />
      <BottomNavigationAction
        icon={<AccountBoxIcon />}
        className={classes.root}
        target="_blank"
        href="https://drive.google.com/file/d/122yZvYMMK16vFC03VTmUE-X6i7MiCNOv/view?ths=true"
      />
    </BottomNavigation>
  );
};
export default Footer;
