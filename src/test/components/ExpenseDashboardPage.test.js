import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render ExpenseDashboard page', () => {
    const wrapper = shallow(<w />)
    expect(wrapper).toMatchSnapshot()
})