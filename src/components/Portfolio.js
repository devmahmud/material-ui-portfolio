import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import projectImage1 from "../images/meme.png";
import projectImage2 from '../images/construction.jpg'


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Meme Weather",
    description: `Meme Weather is my first full-stack project. This project
    uses two APIs, one for getting weather imformation and another (created by me) displaying the meme. I am using
    React for my front-end and Node for my backend.`,
    image: projectImage1,
    github: "http://github.com/TylerPMatthews/MemeWeatherFrontend.git",
    live: "https://meme-weather-frontend.vercel.app",
  },
  {
    name: "Coming soon ...",
    description: `As I am coming toward the final few months of school, I will have more time for side projects. More projects coming very soon.`,
    image: projectImage2,
    github: "https://github.com/TylerPMatthews/",
    live: "",
  },
  // {
  //   name: "Project 3",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project3,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  // },
  // {
  //   name: "Project 4",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project4,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  // },
  // {
  //   name: "Project 5",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project5,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.github}
                >
                  See Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.live}
                >
                  Live Website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
