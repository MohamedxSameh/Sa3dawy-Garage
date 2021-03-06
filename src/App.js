import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/general/Header';
import Footer from './pages/general/Footer';
import Home from './pages/home/Home';
import Ride from './pages/ride/Ride';
import Videos from './pages/vids/Videos';
import Playlist from './pages/vids/Playlist';
import ScrollToTop from './pages/general/ScrollToTop';
import Page404 from './pages/general/Page404';
import ContactUs from './pages/contactUs/ContactUs';
import Shop from './pages/shop/Shop';
import Bike from './pages/shop/Bike';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Ride} />
          <Route exact path="/shop/:id" component={Shop} />
          <Route exact path="/bike/:id" component={Bike} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/videos/:id" component={Playlist} />
          <Route exact path="/contact" component={ContactUs} />
          <Route path="/" component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
