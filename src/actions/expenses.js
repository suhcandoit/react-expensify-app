import database from '../firebase/firebase';

export const addExpense = (expense) => ({ 
    type:'ADD_EXPENSE', 
    expense 
})

export const startAddExpense = (expenseData = {}) => {
    return((dispath) => {
        const {description='', note='', amount=0, createdAt=0} = expenseData;
        const expense = {description, note, amount, createdAt}
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispath(addExpense({
                id: ref.key,
                ...expense}));
        });
    });
};

export const editExpense = (id, updates) => {
    return({
        type:'EDIT_EXPENSE',
        id,
        updates      
    })
}

export const removeExpense = ({id} = {}) => {
    return({
        type:'REMOVE_EXPENSE',
        id
    })
}

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return({
        type:'SET_EXPENSE',
        expenses
    })
}

export const startSetExpenses = () => {
    return((dispath) => {        
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((data) => {
                expenses.push({
                        id: data.key,
                        ...data.val()
                    }
                )
            });
            dispath(setExpenses(expenses));
        })
    });
};
