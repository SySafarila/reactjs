import React from 'react';
import Video from './Video';

class Videos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Video img="https://img.youtube.com/vi/0KmUoTfGa34/maxresdefault.jpg" title="Coding a whole web app ONLY using my Phone" channel="JomaTech" viewsNumber="100K" time="3 days ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJyZOryOWniLH0NuJKZXHvbjsQtaRZlwp6wwKQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="Joma Tech" link="https://www.youtube.com/watch?v=0KmUoTfGa34" />
                    <Video img="https://img.youtube.com/vi/vT3GUKuAzIs/maxresdefault.jpg" title="how coronavirus affects programmers in tech companies" channel="JomaTech" viewsNumber="350K" time="4 mont ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJyZOryOWniLH0NuJKZXHvbjsQtaRZlwp6wwKQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="Joma Tech" link="https://www.youtube.com/watch?v=vT3GUKuAzIs" />
                    <Video img="https://img.youtube.com/vi/JmruASZmX2I/maxresdefault.jpg" title="Stupid questionsabout Software Engineering" channel="Mayuko" viewsNumber="200K" time="1 year ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJy26Wy0_dukQiabv5totgJ9NYftFmntenp6fQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="Mayuko" link="https://www.youtube.com/watch?v=JmruASZmX2I" />
                    <Video img="https://img.youtube.com/vi/lncbay-6HYU/maxresdefault.jpg" title="I left my job (and where I've been)" channel="Mayuko" viewsNumber="150k" time="2 hours ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJy26Wy0_dukQiabv5totgJ9NYftFmntenp6fQ=s176-c-k-c0x00ffffff-no-rj-mo" alt="Mayuko" link="https://www.youtube.com/watch?v=lncbay-6HYU" />
                </div>
            </div>
        );
    }
}

export default Videos;