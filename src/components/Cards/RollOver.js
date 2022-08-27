import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RollOverImage from '../../images/AdobeStock_168506860.jpeg'
import { Link, NavLink } from 'react-router-dom';

export default function RollOverCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={RollOverImage}
        alt="rollover-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Roll Over
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Teaching your dog to roll over can be challenging for some dog more than others. It requires a high level of trust from your dog because rolling on to their back is a vulnerable position for a dog. So make sure you practise in a calm and safe environment and take your time with this dog trick.
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to="/roll-over" exact>
        <Button size="small">Start Learning</Button>
      </NavLink>
      </CardActions>
    </Card>
  );
}