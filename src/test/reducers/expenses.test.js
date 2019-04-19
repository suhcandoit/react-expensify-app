import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expense state value', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id:expenses[0].id
    })
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id:-1
    })
    expect(state).toEqual(expenses)
})

//should add expense
test('should add expense', () => {
    const expense = {
        description:'test'
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })
    expect(state).toEqual(expenses.concat(expense))
})

test('should add expense with spread operation', () => {
    const expense = {
        description:'test'
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })
    expect(state).toEqual([...expenses, expense])
})

//should edit expense
test('should edit expense', () => {
    const description = 'update';
    const updates = {
        description
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    })
    expect(state[0].description).toEqual(description)
})

//should not edit expense if id does not exist
test('should not edit expense', () => {
    const description = 'update';
    const updates = {
        description
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    })
    
    expect(state[0].description).not.toEqual(description)
    expect(state).toEqual(expenses)
})

test('should set expense', () => {
    const action = {
        type:'SET_EXPENSE',
        expenses
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
