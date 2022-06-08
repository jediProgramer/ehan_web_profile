import Header from './components/Header';
import Home from './components/Home';
import './css/styles.css';
import './assets/img/ehan.png'
import { BrowserRouter as Router, Switch, Route} 
from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
