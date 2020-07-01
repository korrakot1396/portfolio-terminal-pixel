import React from 'react';
import '../styles/me.css';

export default class Me extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selfIntroString: "",
            timer: -1
        };
    }

    componentDidMount() {
        let str = '"Hi! Welcome to my website. I am a self-educated software developer skilled in front end programming, but also have an intense passion in backend development. I like learning new technologies and creating fun stuff. Apart from coding, I also enjoy games modding, cooking, and reading."';
        let strArr = str.split("");
        let i = 0;
        let timer = setInterval(() => {
            let currCharStr = strArr[i];
            this.setState({
                selfIntroString: this.state.selfIntroString + currCharStr
            });
            if (i === strArr.length - 1) {
                clearInterval(this.state.timer);
            } else {
                i++;
            }
        }, 30);
        this.setState({
            timer: timer
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (
            <div className="nes-container with-title is-rounded" id="me">
                <p className="title">About Guannan Lyu</p>
                <div id="my-img-frame">
                    <img src={require("../images/me.jpg")} alt="" height="100%" />
                </div>
                <p id="self-description">{this.state.selfIntroString}</p>
            </div>
        );
    }
}