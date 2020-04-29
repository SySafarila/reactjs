import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <Link to="/" className="navbar-brand">Brand</Link>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/zero" className="nav-link">Zero</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/one" className="nav-link">One</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;