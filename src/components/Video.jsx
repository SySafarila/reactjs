import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRun: new Date().toLocaleTimeString()
        };
    }

    tick() {
        this.setState({
            timeRun: new Date().toLocaleTimeString()
        });
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-2">
                <div className="card h-100">
                    <img src={this.props.img} className="img-fluid mb-2" alt="Jomas's video" />
                    <div className="card-body row p-0 pl-3">
                        <div className="col-2 col-md-4 p-0 pr-md-4">
                            <img src={this.props.channelPhoto} className="img-thumbnail border-0" alt="Jomas's video" />
                        </div>
                        <div className="col p-0">
                            <h6 className="mb-0 pr-1">{this.props.title}</h6>
                            <span className="text-muted d-block">{this.props.channel}</span>
                            <span className="text-muted d-block">{this.props.viewsNumber} views · {this.props.time}</span>
                            <span className="text-muted d-block">{this.state.timeRun}</span>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Video;