import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('Setup sortByAmount', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT',
    })
})

test('Setup sortByDate', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type:'SORT_BY_DATE',
    })
})

test('Setup set text filter with default', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('Setup set text filter with input text', () => {
    const result = setTextFilter('test');
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'test'
    })
})

test('Set up setStartDate', () => {
    const result = setStartDate(moment(0))

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Set up setEndDate', () => {
    const result = setEndDate(moment(0))

    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})
