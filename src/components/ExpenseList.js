import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length===0 ?
            (<p>No expenses!</p>) : 
            (props.expenses.map((expense, key) => {
                return <ExpenseListItem key={key} {...expense} />})
        )}
    
    </div>
);

const mapStateToProp = (state) => {
    return {
        expenses:visibleExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProp)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses:state.expenses
//     };
// })(ExpenseList);
