import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
          <h1 className="not-found-title">
            Not Found
    </h1>
        <h1 className="not-found-title">
            These are not the books you are looking for...
    </h1>

        <div className="home-link">
            <Link to="/">Return home and try again</Link>
        </div>
    </div>
);

export default NotFound;