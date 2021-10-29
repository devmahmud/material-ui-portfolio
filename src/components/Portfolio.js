import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import project1 from '../images/rps.png';
import project2 from '../images/eas.png';
import project3 from '../images/calc.png';
import project4 from '../images/lib.png';
import project5 from '../images/ttt.png';
import project6 from '../images/rsp.png';
import project7 from '../images/highlight.png';
import project8 from '../images/wapp.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#3A3E41',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 330,
    margin: '2.3rem auto',
  },
}));

const projects = [
  {
    name: 'Rock Paper Scissors',
    description: `Stylish Javascript project where you compete against an hostile AI hell bent on conquering the world.`,
    image: project1,
    source: 'https://chriscash2020.github.io/RocK-Paper-Scissors/',
  },
  {
    name: 'Etch-a-Sketch',
    description: `Basic project to sketch colorful patterns built wit mouse events and ultizing the math random method.`,
    image: project2,
    source: 'https://chriscash2020.github.io/ETCH-A-SKETCH/',
  },
  {
    name: 'Calculator',
    description: `A basic calculator for arithmetic, helped me plan functions ahead and understand the need to comment on code.`,
    image: project3,
    source: 'https://chriscash2020.github.io/Calculator/',
  },
  {
    name: 'Library',
    description: `A library list to store all your books read made through local storage and class objects.`,
    image: project4,
    source: 'https://chriscash2020.github.io/Library/',
  },
  {
    name: 'Tic-Tac-Toe',
    description: `A basic game with alot of JS animations and stying built through Factory Programming`,
    image: project5,
    source: 'https://chriscash2020.github.io/Tic-Tac-Toe/',
  },
  {
    name: 'Resturant Page',
    description: `Great Restarant Page that utlizes webpack and ES6 modules to create a dynamically tabbed website with low mememory usage`,
    image: project6,
    source: 'https://chriscash2020.github.io/Restuarant-Page/',
  },
  {
    name: 'Weather App',
    description: `Great Weather App that utlizes webpack and API's to create a efficient website with dynamic loading`,
    image: project8,
    source: 'https://chriscash2020.github.io/WeatherApp/',
  },
  {
    name: 'Html & CSS Projects',
    description: `A compilation of 12 html and css projects that highlight my skill in responsiveness and styling each done in 4hr sessions`,
    image: project7,
    source: 'https://chriscash2020.github.io/html-css-highlight/',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Grid container justify='center'>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={3} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea href={project.source}>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='170'
                  image={project.image}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' href={project.source}>
                  Live Demo
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
