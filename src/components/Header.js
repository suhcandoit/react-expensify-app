import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName='selected'>Home</NavLink>
        <NavLink to="/create" activeClassName='selected'>Add Expense</NavLink>
        <NavLink to="/help" activeClassName='selected'>Help Page</NavLink>
        <button onClick={ startLogOut }>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});
  
export default connect(undefined, mapDispatchToProps)(Header);

