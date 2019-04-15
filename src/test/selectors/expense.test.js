import moment from 'moment';
import visibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('Should filter by text value', () => {
    const filters = {
        text:'e',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = visibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]]);
})

test('Should filter by startDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = visibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]]);
})

test('Should filter by endDate', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = visibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]]);
})

test('Should sortby by date', () => {
    const filters = {
        text:'',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = visibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

test('Should sortby by amount', () => {
    const filters = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = visibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})
