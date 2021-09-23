import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
        <div>

        </div>  
        <main>
          <Route path="/" component={LoginScreen} exact></Route>
          <Route path="/dashboard" component={DashboardScreen}></Route>
        </main>
    </BrowserRouter>

  );
}

export default App;
