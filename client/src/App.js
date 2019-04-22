import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/home'
import {About} from './components/about';
import {Contact} from './components/contact';

class App extends Component {  
  render() {
    console.log(this.state + "appp")
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
