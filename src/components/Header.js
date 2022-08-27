import { Link, NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import * as React from 'react';
import Button from '@mui/material/Button';
import DogBanner from '../images/DogBanner.jpg'

const Header = () => {
  return (
    <section className="header">
      <div className="header__bottom">
        <Link className="header__logo" to="/">
        <PetsIcon fontSize="large"/>
          <p className='header__title'>Our Best Friend</p>
        </Link>
        <nav className="header__nav">
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link--active"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link--active"
            to="/about-us"
            exact
          >
            About Us
          </NavLink>
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link--active"
            to="/contact-us"
            exact
          >
            Contact Us
          </NavLink>
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link--active"
            to="/support"
            exact
          >
            Support
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;