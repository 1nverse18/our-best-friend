import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StandImage from '../../images/standing-maltese-dog-coco-fb-png__700.jpg'
import { Link, NavLink } from 'react-router-dom';

export default function StandCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={StandImage}
        alt="bow-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stand
        </Typography>
        <Typography variant="body2" color="text.secondary">
        While this dog trick might not have a practical purpose, teaching your dog how to bow is a nice crowd pleaser. It’s an action that all dogs do naturally so the trick will happen quite easily for most dogs.
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to="/stand" exact>
        <Button size="small">Start Learning</Button>
      </NavLink>
      </CardActions>
    </Card>
  );
}