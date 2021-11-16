import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import FoodList from './Pages/FoodList';
import DrinkList from './Pages/DrinkList';
import Menu from './Pages/Menu';
import Coffee from './Pages/Coffee';
import Pay from './Pages/Pay';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/food-list">
          <FoodList />
        </Route>
        <Route path="/drink-list">
          <DrinkList />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/menu/:id">
          <Coffee />
        </Route>
        <Route path="/Pay">
          <Pay />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
