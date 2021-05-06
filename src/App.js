import './App.css';
import Header from './pages/general/Header';
import Footer from './pages/general/Footer';
import Home from './pages/home/Home';
import Motorcycles from './pages/motorcycles/Motorcycles';
function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      <Motorcycles />
      <Footer />
    </div>
  );
}

export default App;
