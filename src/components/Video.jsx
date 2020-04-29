import React from 'react';

class Video extends React.Component {
    render() {
        return (
                <div className="col-md-3 border p-0 m-1">
                    <img src={this.props.img} className="img-fluid mb-2" alt="Jomas's video" />
                    <div className="row">
                        <div className="col-4 pr-0">
                            <img src={this.props.channelPhoto} className="img-thumbnail rounded-circle border-0" width="68" alt="Jomas's video" />
                        </div>
                        <div className="col pl-0">
                            <h6 className="mb-0">{this.props.title}</h6>
                            <span className="text-muted d-block">{this.props.channel}</span>
                            <span className="text-muted d-block">{this.props.viewsNumber} views · {this.props.time}</span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Video;