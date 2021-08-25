
import './App.css';
import Main from './containers/Main';
import AlJalil from './containers/AlJalil';
import AlNoor from './containers/AlNoor';
import AlBari from './containers/AlBari';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/albariresidencia">
      <AlBari />
    </Route>
    <Route path="/aljalilgarden">
      <AlJalil />
    </Route>
    <Route path="/alnoororchard">
      <AlNoor />
    </Route>
    <Route path="/">
      <Main/> 
    </Route>
  </Switch>
     
    </Router>
    );
}

export default App;
