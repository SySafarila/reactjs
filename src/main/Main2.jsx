import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import Video from '../components/Video';

function Main2() {
    return(
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/zero">
                        <h1 className="pl-2">This is zero</h1>
                    </Route>
                    <Route path="/one">
                        <h1 className="pl-2">This is one | <Link to="/" className="text-danger text-decoration-none">Back to home</Link></h1>
                    </Route>
                    <Route path="/video">
                        <div className="container">
                            <div className="row">
                                <Video img="https://img.youtube.com/vi/0KmUoTfGa34/maxresdefault.jpg" title="Coding a whole web app ONLY using my Phone" channel="JomaTech" viewsNumber="100K" time="3 days ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJyZOryOWniLH0NuJKZXHvbjsQtaRZlwp6wwKQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                                <Video img="https://img.youtube.com/vi/vT3GUKuAzIs/maxresdefault.jpg" title="how coronavirus affects programmers in tech companies" channel="JomaTech" viewsNumber="350K" time="4 mont ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJyZOryOWniLH0NuJKZXHvbjsQtaRZlwp6wwKQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                                <Video img="https://img.youtube.com/vi/JmruASZmX2I/maxresdefault.jpg" title="Stupid questionsabout Software Engineering" channel="Mayuko" viewsNumber="200K" time="1 year ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJy26Wy0_dukQiabv5totgJ9NYftFmntenp6fQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                                <Video img="https://img.youtube.com/vi/lncbay-6HYU/maxresdefault.jpg" title="I left my job (and where I've been)" channel="Mayuko" viewsNumber="150k" time="2 hours ago" channelPhoto="https://yt3.ggpht.com/a/AATXAJy26Wy0_dukQiabv5totgJ9NYftFmntenp6fQ=s176-c-k-c0x00ffffff-no-rj-mo" />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main2;