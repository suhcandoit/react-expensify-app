import { createStore } from 'redux';

//action generator - a function to return action object
const incrementCount = ({incrementBy = 1} = {}) => {
    return{
        type:'INCREMENT',
        incrementBy
    }
}

//action generator - a function to return action object
const decrementCount = ({decrementBy = 1} = {}) => {
    return{
        type:'DECREMENT',
        decrementBy
    }
}

//setCount / resetCount
const setCount = ({count = 0} = {}) => {
    return({
        type:'SET',
        count
    })
}

const resetCount = () => ({
    type: 'RESEST'
})

const countReducer = ( state = { count: 0 }, action ) => {
    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return {
            count: 0
        }
        case 'SET':
        return {
            count: action.count
        }
        default:
            return state;
    }
}

//Reducers - 
//1. Its pure function - output are purely determined by input
//2. Never change state or action
const store = createStore(countReducer);

const subscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 5 }))

store.dispatch(setCount({count: 777}))