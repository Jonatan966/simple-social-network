import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Conversations from './pages/Conversations';
import Explore from './pages/Explore';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Landing}/>
            <Route path='/explore' component={Explore}/>
            <Route path='/conversations' component={Conversations}/>
            <Route path='/profile/:userId' component={Profile}/>
        </BrowserRouter>
    );
}