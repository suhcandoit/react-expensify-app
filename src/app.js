import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import configurationStore from '../src/store/configureStore';
import AppRouter, {history} from './routers/AppRouter';
import { firebase } from '../src/firebase/firebase';
import { addExpense, editExpense, startSetExpenses } from '../src/actions/expenses';

// import { setTextFilter } from '../src/actions/filters';

const store = configurationStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//store.dispatch(setTextFilter('bill'));

// const state = store.getState();
// const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Log in');
    } else {
        console.log('Log out');
        //history.push('/')
    }
  });