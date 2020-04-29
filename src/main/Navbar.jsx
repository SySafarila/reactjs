import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Brand',
            nav: 'collapse navbar-collapse'
        };
    }

    changeBrand() {
        this.setState({
            brand: 'Brand changed'
        });
    }

    handleClick = () => {
        if (this.state.nav === 'collapse navbar-collapse') {
            this.setState({
                nav: 'collapse navbar-collapse show'
            });
        } else {
            this.setState({
                nav: 'collapse navbar-collapse'
            });
        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mb-3">
                <Link to="/" className="navbar-brand">{this.state.brand}</Link>
                <button className="navbar-toggler" type="button" onClick={this.handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.nav}>
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