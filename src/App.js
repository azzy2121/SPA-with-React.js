import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// PAGES
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div className="mb-3">
        <Header />
      </div>
      <div className="container-fluid">
        <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/shop">
              <Shop />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      </div> 
      <div className="mt-3" >
        <Footer /> 
      </div>   
    </div>
  );
}

export default App;