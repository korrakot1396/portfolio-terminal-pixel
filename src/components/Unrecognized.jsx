import React from 'react';
import '../styles/unrecognized.css';

export default class Unrecognized extends React.Component {
    render() {
        return (
            <div id="unrecognized">> Sorry, but your command has drifted to Mars...&nbsp;
                <i className="fas fa-rocket"></i>
            </div>
        );
    }
}