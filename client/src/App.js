import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import './App.css';
import logo from './SpaceX_Logo_Black.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img src={logo} 
              alt="SpaceX" 
              style={{width: 300, display: "block", margin:'auto'}} />
          <Route exact path="/launch/:flight_number" component={Launch}/>
          <Route exact path="/" component={Launches}/>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
