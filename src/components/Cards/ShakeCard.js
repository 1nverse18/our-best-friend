import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShakeImage from '../../images/camylla-battani-AoqgGAqrLpU-unsplash.jpg'
import { Link, NavLink } from 'react-router-dom';

export default function ShakeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={ShakeImage}
        alt="shake-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Shake hands (or a paw shake!) is a popular dog trick and is usually the first trick most people teach their dogs. This is an easy trick to teach and most dogs pick it up really quickly.
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to="/shake" exact>
        <Button size="small">Start Learning</Button>
      </NavLink>
      </CardActions>
    </Card>
  );
}