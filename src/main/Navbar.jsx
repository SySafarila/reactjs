import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm mb-3">
                <Link to="/" className="navbar-brand">{this.state.brand}</Link>
                <button className="navbar-toggler" type="button" onClick={this.handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={this.state.nav}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active font-weight-bold" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/zero" className="nav-link" activeClassName="active font-weight-bold">Zero</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/one" className="nav-link" activeClassName="active font-weight-bold">One</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/video" className="nav-link" activeClassName="active font-weight-bold">Video</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="https://google.com" className="nav-link">Google</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/twbs/bootstrap/releases/download/v4.4.1/bootstrap-4.4.1-dist.zip" className="nav-link p-0 pt-1"><button className="btn btn-sm btn-outline-warning btn-block font-weight-bold">Download</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;