import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/general/Header';
import Footer from './pages/general/Footer';
import Home from './pages/home/Home';
import Motorcycles from './pages/motorcycles/Motorcycles';
import Videos from './pages/vids/Videos';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Motorcycles} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
