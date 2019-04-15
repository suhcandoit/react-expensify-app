//redux is state management for React
//Action, State, Store, Reducer

//Action: Object to define how state will be changed per different actions
//State: Object to define a business logic that your application need. 
//Store: Its an object to define how state wil lbe updated per different action. 
//Its not a class but an object with mutliple supporting methods like dispatch, getState, Subscribe, etc
import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return({
            count: state.count + action.incrementBy
        });

        default:
        return state;
    }
})

const incrementCount = ({incrementBy = 1} = {}) => {
    return({type:'INCREMENT', incrementBy})
}

const subscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 1}))
store.dispatch(incrementCount({incrementBy: 10}))
