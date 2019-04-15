import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[0]} />);
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.state('error')).toEqual("Please provide description and amount");
    expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "New description";
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('Should set note on textarea', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "Test Note123";
    wrapper.find('textarea').simulate('change', { target: { value } });
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('Should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "23.50";
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toEqual(value)
})

test('Should set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "23.5000";
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onsubmit with valid data', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', { preventDefault: () => {   
    } });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    })
})

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);   
    expect(wrapper.state('createdAt')).toBe(now);
})

test('Should set onFocus on calendar focus', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});   
    expect(wrapper.state('calendarFocused')).toBe(focused);
})

