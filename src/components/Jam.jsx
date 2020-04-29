import React from 'react';

class Jam extends React.Component {
    // Set state
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }

    // set setState
    detik() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    // Start timer
    componentDidMount() {
        this.timer = setInterval(
            () => this.detik(),
            1000
        );
    }

    // Clear timer
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <p>Sekarang jam {this.state.date}</p>
            </div>
        );
    }
}

export default Jam;