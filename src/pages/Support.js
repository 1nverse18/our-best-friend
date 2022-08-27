import * as React from 'react';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';

const Support = () => {
    return (
      <div className='support'>
        <h1 className='support__title'>Support</h1>
        <Link to='/contact-us'>
        <Button variant="contained" >
        <a href="mailto:yikfungseant@gmail.com" />
            Need Help?
        </Button>
        </Link>
        <p></p>
      </div>
    );
  };
  
  export default Support;