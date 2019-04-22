import database from '../firebase/firebase';


export const editExpense = (id, updates) => {
    return({
        type:'EDIT_EXPENSE',
        id,
        updates      
    })
}

export const startEditExpense = (id, updates) => {
    return (dispath, getState) => {
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispath(editExpense(id, updates))
        })
    }
}

export const removeExpense = ({id} = {}) => {
    return({
        type:'REMOVE_EXPENSE',
        id
    })
}

export const startRemoveExpense = ({id} = {}) => {
    return ((dispath, getState) => {        
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispath(removeExpense({id}))
        })
    }); 
}

export const addExpense = (expense) => ({ 
    type:'ADD_EXPENSE', 
    expense 
})

export const startAddExpense = (expenseData = {}) => {
    return((dispath, getState) => {
        const uid = getState().auth.uid;
        const {description='', note='', amount=0, createdAt=0} = expenseData;
        const expense = {description, note, amount, createdAt}
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispath(addExpense({
                id: ref.key,
                ...expense}));
        });
    });
};

// SET_EXPENSES
export const setExpenses = (expenses) => {
    return({
        type:'SET_EXPENSE',
        expenses
    })
}

export const startSetExpenses = () => {
    return((dispath, getState) => {     
        const uid = getState().auth.uid;   
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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
