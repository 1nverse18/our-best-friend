import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayDeadImage from '../../images/istockphoto-1267154559-612x612.jpg'
import { Link, NavLink } from 'react-router-dom';

export default function PlayDeadCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="140"
        image={PlayDeadImage}
        alt="playdead-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Play Dead
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Playing dead or getting your dog to lie still on its side is another crowd favourite. If you are not a fan of guns, you can always use the cue ‘boo’ and pretend to be scaring your dog into a fainting position for this dog trick instead.
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink to="/play-dead" exact>
        <Button size="small">Start Learning</Button>
      </NavLink>
        
      </CardActions>
    </Card>
  );
}