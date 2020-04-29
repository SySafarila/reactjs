import React from 'react';

class Jam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }

    detik() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.detik(),
            1000
        );
    }

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