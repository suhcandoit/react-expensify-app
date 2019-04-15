import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import configurationStore from '../src/store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';

const store = configurationStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));