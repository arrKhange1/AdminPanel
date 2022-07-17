import React, { useEffect } from "react";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from './components/Home';
import { createBrowserHistory } from 'history';
import { Route, Router } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchUser } from "./store/reducers/auth/actionCreators";
import Navigation from "./components/Navigation";
import AdminPanel from "./components/AdminPanel/AdminPanel";

const history = createBrowserHistory();
// перемещено из компонента
const App = () => {
    const userRole = useAppSelector(state => state.authReduser.role); // добавлено для отсл. роли юзера
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [])
    return (<>
        <Router history={history}>
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {userRole === 'admin' && <PrivateRoute path='/adminpanel' component={AdminPanel} /> }
        </Router>
    </>
    );
}

export default App;