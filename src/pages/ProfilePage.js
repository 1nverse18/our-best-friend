import { Component } from 'react';
import axios from 'axios';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import ShakeCard from '../components/Cards/ShakeCard';
import SpinCard from '../components/Cards/SpinCard';
import PlayDeadCard from '../components/Cards/PlayDead';
import StandCard from '../components/Cards/StandCard';
import RollOverCard from '../components/Cards/RollOver';
import DogTrainer from '../images/dog-training-silhouette-3.png';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

class ProfilePage extends Component {
  state = {
    isAuthenticating: true,
    isLoggedIn: false,
    profileData: null
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then(res => {
        this.setState({
          isAuthenticating: false,
          isLoggedIn: true,
          profileData: res.data
        })
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            isAuthenticating: false,
            isLoggedIn: false
          });
        } else {
          console.log('Error authenticating', err);
        }
      });
  }

  render() {
    const { isAuthenticating, isLoggedIn, profileData } = this.state;

    if (isAuthenticating) return null;

    return (
      <section className="profile-page">
        {isLoggedIn ? (
          profileData && (
            <><div className='profile-page__flex'>
                <div>
                  <h2 className='profile-page__title'>Welcome to Our Best Friend, {profileData.username}</h2>
                  <p>Training since: {this.formatDate(profileData.updated_at)}</p>
                </div>
                <img
                className="profile-page__avatar"
                src={profileData.avatar_url}
                alt={`${profileData.username} avatar`}
                />
              </div>
              <div className="profile-page__cards">
              <div>
                <div className='profile-page__shake'>
                <ShakeCard />
                </div>
              <StandCard />
              </div>
              <div>
                <div className='profile-page__play-dead'>
                <PlayDeadCard />
                </div>
              <SpinCard />
              </div>
              <div className='profile-page__roll-over'>
              <RollOverCard />
              </div>
              </div>
              <div className="profile-page__logout-wrapper">
                <LogoutButton/>
              </div>
            </>
          )
        ) : (
          <>
            <div className='profile-page__content'>
            <p >Millions of people around the world love dogs and would potentially be an owner but many
              are concerned with how and where to start with training. Our Best Friend allows just about
              anyone to become a professional trainer through education and its ability to keep track of
              progress. By providing a framework to operate around dog owners will gain a new sense of
              confidence in training and ownership.</p>
            <p>Login below to get started!</p>
              <div className='profile-page__container'>
                <LoginButton/>
                <img src={DogTrainer}></img>
              </div>
            </div>
          </>
        )}
      </section>
    );
  }

  formatDate = (date) => {
    return (new Date(date)).toLocaleDateString('en-US'); 
  }
}

export default ProfilePage;