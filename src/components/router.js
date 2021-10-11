import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Home, Add, Edit } from '../pages'


export function Router(){
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/add" component={Add}/>
            <Route path="/edit" component={Edit}/>
        </Switch>
    );
}