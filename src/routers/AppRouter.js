import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'; 
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { createBrowserHistory } from 'history';
//export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/dashboard' component={ExpenseDashboardPage} />
                <Route exact path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;