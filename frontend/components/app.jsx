import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
      <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
      </Switch>
  </div>
);

export default App;
