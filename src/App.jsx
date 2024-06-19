import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import Room from './components/Room';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroScreen} />
        <Route path="/room" component={Room} />
      </Switch>
    </Router>
  );
}

export default App;
