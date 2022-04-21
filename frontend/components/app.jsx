import React from 'react';
import { Provider } from 'react-redux';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Bench BnB</h1>
      </Link>
      <GreetingContainer />
  </div>
);

export default App;
