import React from 'react';
import '../styles/help.css';

import Me from './Me';
import Cv from './Cv';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import MyApps from './MyApps';

import { componentEnterStack, clearStack, triggerTerminalScroll } from '../redux/actions.js';
import { connect } from 'react-redux';

class Help extends React.Component {
    showMe = () => {
        this.props.componentEnterStack(<Me></Me>);
        this.props.triggerTerminalScroll();
    }
    showCv = () => {
        this.props.componentEnterStack(<Cv></Cv>);
        this.props.triggerTerminalScroll();
    }
    showExp = () => {
        this.props.componentEnterStack(<Experience></Experience>);
        this.props.triggerTerminalScroll();
    }
    showMyApps = () => {
        this.props.componentEnterStack(<MyApps></MyApps>);
        this.props.triggerTerminalScroll();
    }
    showCon = () => {
        this.props.componentEnterStack(<Contact></Contact>);
        this.props.triggerTerminalScroll();
    }
    showEdu = () => {
        this.props.componentEnterStack(<Education></Education>);
        this.props.triggerTerminalScroll();
    }
    showHelp = () => {
        // 这是个很好的 lessons learnt。
        // 以下这行不可以。实测中发现，这样在debug窗口中的<Help />组件是没有被 react-redux connected 的。
        // 最开始觉得特别 weird，但是也 make sense，因为这里直接调用 <Help /> 是没有被 connect封装的。
        // 既然没有被 connect 封装，那么 redux 中的 store 和 actions 也就没有作为 props 传给 "这个" Help组件
        // 所以，当点击这个 Help 组件里的按钮时，它就无法调用 this.props.xxx 这些 action。就会报错。
        // 要让它工作，只能把用 connect 封装过的 Help 传过去。

        // this.props.componentEnterStack(<Help></Help>);
        this.props.componentEnterStack(<ConnectedHelp></ConnectedHelp>);
        this.props.triggerTerminalScroll();
    }
    clearTerminal = () => {
        this.props.clearStack();
        this.props.triggerTerminalScroll();
    }
    render() {
        return (
            <ul id="my-help">
                <li className="help-title">Available commands (type or click):</li>
                <li className="help-item">
                    <span className="help-cmd">'me'</span>: Brief introduction of me. <button type="button" className="nes-btn is-primary" onClick={this.showMe}>ME</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'edu'</span>: My education history. <button type="button" className="nes-btn is-success" onClick={this.showEdu}>EDU</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'app'</span>: Some fun apps I created. <button type="button" className="nes-btn is-warning" onClick={this.showMyApps}>APP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'exp'</span>: Experience as a developer. <button type="button" className="nes-btn is-error" onClick={this.showExp}>EXP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cv'</span>: My curriculum vitae. <button type="button" className="nes-btn" onClick={this.showCv}>CV</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'con'</span>: Want to contact? Here it goes. <button type="button" className="nes-btn is-primary" onClick={this.showCon}>CON</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'help'</span>: See a list of commands. <button type="button" className="nes-btn is-success" onClick={this.showHelp}>HELP</button>
                </li>
                <li className="help-item">
                    <span className="help-cmd">'cls'</span>: Clear the terminal. <button type="button" className="nes-btn is-warning" onClick={this.clearTerminal}>CLS</button>
                </li>
            </ul>
        );
    }
}

let ConnectedHelp = connect(null, {
    componentEnterStack: componentEnterStack,
    clearStack: clearStack,
    triggerTerminalScroll: triggerTerminalScroll
})(Help);

export default ConnectedHelp;
// 对于 react-redux 连接的组件，首字母必须大写。
// 如果用标签形式效用，更需要首字母都大写。