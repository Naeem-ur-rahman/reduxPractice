import React from 'react';
import { Link } from 'react-router-dom';

const FetchPage = () => {
    return (
        <div>
            <Link to="/"><button style={{ marginRight: '200px' }}>Home</button></Link>
            <button>Fetch API Redux</button>
        </div>
    );
}

export default FetchPage;
