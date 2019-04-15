import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList items', () => {
    const wrapper = shallow(<ExpenseListItem key={0} {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})