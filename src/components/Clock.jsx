import React from 'react';
import Jam from './Jam';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>ini {this.state.date.toLocaleTimeString()}.</h2>
                <Jam />
            </div>
        );
    }
}

export default Clock;