
import React, { Component } from 'react';
//import 'mdbootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/ajout'} className="nav-link">Ajout</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/liste'} className="nav-link">Liste</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/ajout' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/liste' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;