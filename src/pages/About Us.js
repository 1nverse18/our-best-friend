import SeanImage from '../images/FXE0TUvXEAAEnnQ.jpg';
import SnoopyImage from '../images/10360340_10152536890573977_981759878908595564_n.jpg';

const AboutUs = () => {
    return (
      <div className='about-us'>
        <h1 className='about-us__title'>About Us</h1>
        <h2 className='about-us__subtitle'>Team:</h2>
        <div className='about-us__team'>
            <div className='about-us__container'>
                <img className='about-us__sean' src={SeanImage} alt="sean-photo"></img>
                <div>
                  <p> ~ Yikfung Sean Tang</p>
                  <p> ~ Creator</p>
                </div>
            </div>
            <div className='about-us__container'>
                <img className='about-us__snoopy' src={SnoopyImage} alt="snoopy-photo"></img>
                <div>
                  <p> ~ Snoopy</p>
                  <p> ~ Creator's Bestfriend</p>
                </div>
            </div>

        </div>
        <h2>Goals:</h2>
        <div>
        <p>Our Best Friend is designed by dog owners for dog owners. We are built to make progress tracking easy and accessible for new and veteran dog trainers. </p>
        </div>
        <h2>Careers:</h2>
        <div>
        <p>We are not currently hiring!</p>
        </div>
      </div>
    );
  };
  
  export default AboutUs;