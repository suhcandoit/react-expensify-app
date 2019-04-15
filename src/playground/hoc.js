import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Private: </p>
            <WrappedComponent {...props} />
        </div>
    )
}   

//Its not a high order component. 
//Its a function to return HOC component
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>{props.isAuthenticated ? (<WrappedComponent {...props} />) : <p>Please login to info</p>}</div>
    )
}   

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info='details'/>, document.getElementById('app'));