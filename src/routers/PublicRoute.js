import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest}) => (    
        <div>
            <Route {...rest} component={(props) => {
                return (
                    isAuthenticated ? <Redirect to='/dashboard' />: <Component {...props} /> 
                )
            }} />
        </div>    
)

//setup value and onChange for select
const mapStateToProps = (state) => ({ 
    isAuthenticated: !!state.auth.uid 
})

export default connect(mapStateToProps)(PublicRoute);

