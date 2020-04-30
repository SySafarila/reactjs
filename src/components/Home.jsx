import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header">Card Header</div>
                            <div className="card-body">
                                <p className="m-0">This is card body.</p>
                                <p className="mb-0">List Routes :</p>
                                <ul>
                                    <li><Link to="/" className="text-decoration-none">Home</Link></li>
                                    <li><Link to="/zero" className="text-decoration-none">Zero</Link></li>
                                    <li><Link to="/one" className="text-decoration-none">One</Link></li>
                                    <li><Link to="/video" className="text-decoration-none">Video</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;