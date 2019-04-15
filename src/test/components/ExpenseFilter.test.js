import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseFilters } from '../../components/ExpenseFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper;
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseFilters 
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        filters = {filters}
        />)

})

test('Should render expense filter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should render expense filter with valid data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
})

test('Should handle text change', () => {
    const value = 'text';
    wrapper.find('input').simulate('change', {
        target: {
        value}});
    expect(setTextFilter).toHaveBeenLastCalledWith(value)    
})

test('Should sort by date', () => {
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled()    
})

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled()    
})

test('Should handle date change', () => {
    const startDate = moment(0);
    const endDate = moment().add(3, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)    
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)    
})

test('Should handle focus change', () => {
    const calendarFocus ='endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocus);   
    expect(wrapper.state('calendarFocus')).toBe(calendarFocus);
})
