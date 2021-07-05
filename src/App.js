
import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';import SingleMovies from './pages/SingleMovie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/single">
              <SingleMovie />
            </Route>
            <Route path="/">
              <Movies />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
