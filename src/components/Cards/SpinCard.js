import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SpinImage from '../../images/dog-spinning-in-snow-031522.jpg'
import { Link, NavLink } from 'react-router-dom';

export default function SpinCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={SpinImage}
        alt="spin-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Spin
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Teaching your dog how to spin is a cute and easy trick. Make sure you also teach your dog how to go the other way and use two seperate cues.
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to="/spin" exact>
        <Button size="small">Start Learning</Button>
      </NavLink>
      </CardActions>
    </Card>
  );
}