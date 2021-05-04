import React from 'react';
import Header from './components/header/header.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/shop" component={ShopPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
