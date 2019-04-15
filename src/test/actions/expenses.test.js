import { editExpense, removeExpense, addExpense } from '../../actions/expenses';

//{description='', note='', amount=0, createdAt=0}
test('Set up should add action', () => {
    const action = addExpense({
        amount:0,
        createdAt: 0,
        description: 'test',
        note:'note'
    })

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            amount:0,
            createdAt: 0,
            description: 'test',
            id: expect.any(String),
            note:'note'
        }
    })
})

test('Set up should add action with default setting', () => {
    const action = addExpense()

    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            amount:0,
            createdAt: 0,
            description: '',
            id: expect.any(String),
            note:''
        }
    })
})