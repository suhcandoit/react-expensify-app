import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    // It uses to link internally without refresh/reloading
    <div> 
        404 Page - <Link to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;


