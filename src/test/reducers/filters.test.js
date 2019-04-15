import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        'startDate': moment().startOf('month'),
        'endDate':moment().endOf('month')
    })
})

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        'startDate': undefined,
        'endDate': undefined
    }

    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date')
})

//should set text filter
test('should set text filter', () => {
    const text = 'test';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text})
    expect(state.text).toEqual(text)
})

//should set startDate filter
test('should set startDate filter', () => {
    const startDate =  moment(0);
    const state = filtersReducer(undefined, 
        {
            type: 'SET_START_DATE',
            startDate})
    expect(state.startDate).toEqual(startDate)
})

//should set endDate filter
test('should set endtDate filter', () => {
    const endDate =  moment(0);
    const state = filtersReducer(undefined, 
        {
            type: 'SET_END_DATE',
            endDate})
    expect(state.endDate).toEqual(endDate)
})
