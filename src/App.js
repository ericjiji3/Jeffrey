import logo from './logo.svg';
import styles from "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import mail from './components/pics/mail.png';

function App() {
  return (
    <div className="container-fluid">
      <div className = "row">
        <div className = "header">
          <Header/>
        </div>
      </div>
      <div className = "afterHeader row">
      <Router>
          <Switch>
            <Route path = '/videos' component = {Videos}/>
            <Route path = '/gallery' component = {Gallery}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/portfolio' component = {Portfolio}/>
            <Route path = '/' exact component = {Home}/>
          </Switch>
      </Router>
      <div>
          <img className="sticky" src={mail} />
      </div>
      </div>
    </div>
  );
}

export default App;
