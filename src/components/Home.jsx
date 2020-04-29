import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">Card Header</div>
                    <div className="card-body">
                        <p>This is card body</p>
                        <ul>
                            <li><Link to="/zero">Zero</Link></li>
                            <li><Link to="/one">One</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;