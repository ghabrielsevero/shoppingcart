import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/home';
import ShoppingCart from './pages/shoppingcart';
import Pagament from './pages/pagament';
import Messages from './Components/Messages';


import store from './store';


const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
         <Messages />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shoppingcart" component={ShoppingCart} />
                <Route path="/pagament" component={Pagament} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Routes;