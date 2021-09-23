import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
        <div>

        </div>  
        <main>
          <Route path="/" component={LoginScreen} exact></Route>
        </main>
    </BrowserRouter>

  );
}

export default App;
