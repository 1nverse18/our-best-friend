import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import PlayDeadPage from './pages/TrickPages/PlayDeadPage';
import RollOverPage from './pages/TrickPages/RollOverPage';
import ShakePage from './pages/TrickPages/ShakePage';
import SpinPage from './pages/TrickPages/SpinPage';
import StandPage from './pages/TrickPages/StandPage';
import AuthFailPage from './pages/AuthFailPage';
import ContactUs from './pages/Contact Us';
import AboutUs from './pages/About Us';
import Support from './pages/Support';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProfilePage}/>
          <Route path="/play-dead" component={PlayDeadPage}/>
          <Route path="/roll-over" component={RollOverPage}/>
          <Route path="/shake" component={ShakePage}/>
          <Route path="/spin" component={SpinPage}/>
          <Route path="/stand" component={StandPage}/>
          <Route path="/auth-fail" component={AuthFailPage}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/support" component={Support}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;