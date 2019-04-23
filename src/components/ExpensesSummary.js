import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import visibleExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
          <div className="content-container">
          {<h1 className='page-header__title'>Viewing {props.expenses.length} {expenseWord} totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</h1>}
          <div className="page-header__actions">
              <Link className="button" to="/create">Add Expense</Link>
            </div>
          </div>
        </div>
      );
    };
    

const mapStateToProp = (state) => {
    return({
        expenses: visibleExpenses(state.expenses, state.filters)
    })
}

export default connect(mapStateToProp)(ExpensesSummary);
