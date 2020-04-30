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
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 shadow-sm border-0">
                    <a href={this.props.link} className="stretched-link" target="_blank" rel="noopener noreferrer"><span className="d-none">Go to video</span></a>
                    <img src={this.props.img} className="img-fluid mb-2" alt={this.props.alt} />
                    <div className="card-body row p-0 pl-3">
                        <div className="col-2 col-md-3 p-0 pr-md-1">
                            <img src={this.props.channelPhoto} className="img-thumbnail rounded-circle border-0" alt={this.props.alt} />
                        </div>
                        <div className="col pl-1 mb-2">
                            <h6 className="mb-0">{this.props.title}</h6>
                            <span className="text-muted d-block">{this.props.channel}</span>
                            <span className="text-muted d-block">{this.props.viewsNumber} views · {this.props.time}</span>
                            <span className="text-muted d-block">{this.state.timeRun}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;