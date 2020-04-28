import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark shadow-sm">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <ul className="navbar-nav mr-auto">
                    <a href="https://google.com" className="nav-item nav-link"><div className="btn btn-sm btn-success">Download</div></a>
                </ul>
            </nav>
        );
    }
}

export default Navbar;