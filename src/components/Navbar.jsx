import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            brand: 'This Brand',
            ul: 'absolute right-0 top-0 bg-purple-500 flex flex-col pt-10 h-screen md:flex-row md:static md:p-0 md:h-auto transform origin-top scale-y-0 md:scale-y-100 md:bg-transparent transition-all duration-200 ease-in-out overflow-auto w-40 md:w-auto -z-10 md:z-10'
        });
    }

    brandClick = () => {
        // console.log(this.state.brand);
        this.setState({
            brand: 'New Brand'
        });
    }

    ulClick = () => {
        if (this.state.ul === 'absolute right-0 top-0 bg-purple-500 flex flex-col pt-10 h-screen md:flex-row md:static md:p-0 md:h-auto transform origin-top scale-y-0 md:scale-y-100 md:bg-transparent transition-all duration-200 ease-in-out overflow-auto w-40 md:w-auto -z-10 md:z-10') {
            this.setState({
                ul: 'absolute right-0 top-0 bg-purple-500 flex flex-col pt-10 h-screen md:flex-row md:static md:p-0 md:h-auto transform origin-top scale-y-100 md:scale-y-100 md:bg-transparent transition-all duration-200 ease-in-out overflow-auto w-40 md:w-auto -z-10 md:z-10'
            });
        } else {
            this.setState({
                ul: 'absolute right-0 top-0 bg-purple-500 flex flex-col pt-10 h-screen md:flex-row md:static md:p-0 md:h-auto transform origin-top scale-y-0 md:scale-y-100 md:bg-transparent transition-all duration-200 ease-in-out overflow-auto w-40 md:w-auto -z-10 md:z-10'
            });
        }
    }

    render() {
        return (
            <nav className="bg-purple-800 px-4 py-2 flex align-center justify-between sticky top-0">
            <span className="md:hidden flex align-center">
                <span className="material-icons text-white hover:text-gray-100 cursor-pointer">notifications</span>
            </span>
            <span className="font-bold text-white">{this.state.brand}</span>
            <span className="md:hidden flex align-center cursor-pointer" onClick={this.ulClick}>
                <span className="material-icons text-white transition-all duration-200 transform" id="menu">menu</span>
            </span>
            <ul className={this.state.ul} id="ul-navbar">
                <li className="py-2 px-2 text-white md:py-0 hover:bg-purple-800 transition-all duration-300">link</li>
                <li className="py-2 px-2 text-white md:py-0 hover:bg-purple-800 transition-all duration-300">link</li>
                <li className="py-2 px-2 text-white md:py-0 hover:bg-purple-800 transition-all duration-300">link</li>
            </ul>
        </nav>
        );
    }
}

export default Navbar;