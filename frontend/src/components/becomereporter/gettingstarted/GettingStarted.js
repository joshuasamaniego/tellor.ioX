import React from 'react';

import './GettingStarted.scss';
import videoplaceholder from 'assets/video_placeholder.png';

const GettingStarted = () => {

    return (
        <div className="GettingStarted">
            <div className="GettingStarted__intro">
                <h2 className="page-header-small">Steps to get started</h2>
                <ol className="page-text">
                    <li>Advanced knowledge of blockchain smart contracts</li>
                    <li>GPU running something...something</li>
                    <li>Access to consistent broadband network</li>
                    <li>Ability to run Telliot software 24/7</li>
                    <li>An understanding of Tellor’s technical docs here</li>
                </ol>
                <p className="page-text">When data is requested, data reporters submit values to be put on-chain. Data reporters can also receive tips from users to update certain data points more frequently.</p>
            </div>
            <div className="SampleUsing__video">
                <video poster={videoplaceholder}>
                    {/* 
                        Todo: Insert mp4, webm, and video link
                    */}
                    <source src="myVideo.mp4" type="video/mp4" />
                    <source src="myVideo.webm" type="video/webm" />
                    <p>
                        Your browser doesn't support HTML5 video. Here is a 
                        <a href="myVideo.mp4">link to the video</a> instead.
                    </p>
                </video>
            </div>
        </div>
    )
}

export default GettingStarted;