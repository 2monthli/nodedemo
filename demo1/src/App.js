import React from 'react';
import { HashRouter as Router,Route} from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Login from './Login'

function App() {
  return (
    <Router >
        <div style={{margin:'10px'}}>
            <Route path="/" component={Home} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Page3" component={Page3} />
            <Route path="/Login" component={Login} />
        </div>
    </Router>
  );
}

export default App;
