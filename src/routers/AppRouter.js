import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path='/' component={LoginPage} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute exact path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;