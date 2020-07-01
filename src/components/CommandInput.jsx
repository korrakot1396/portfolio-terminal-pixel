import React from 'react';
import "../styles/commandinput.css";

import { componentEnterStack, clearStack, triggerTerminalScroll } from '../redux/actions.js';
import { connect } from 'react-redux';

import Contact from './Contact';
import Cv from './Cv';
import Education from './Education';
import Help from './Help';
import Me from './Me';
import Unrecognized from './Unrecognized';
import Experience from './Experience';
import MyApps from './MyApps';

class CommandInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCommand: ""
        };
    }
    updateCommand = (event) => {
        this.setState({
            currentCommand: event.target.value
        });
    }
    enterCommand = (event) => {
        if (event.keyCode === 13) {
            this.props.componentEnterStack(`> ${this.state.currentCommand}`);
            let command = this.state.currentCommand.toLowerCase();
            switch (command) {
                case "me":
                    this.props.componentEnterStack(<Me></Me>);
                    break;
                case "edu":
                    this.props.componentEnterStack(<Education></Education>);
                    break;
                case "app":
                    this.props.componentEnterStack(<MyApps></MyApps>);
                    break;
                case "exp":
                    this.props.componentEnterStack(<Experience></Experience>);
                    break;
                case "cv":
                    this.props.componentEnterStack(<Cv></Cv>);
                    break;
                case "con":
                    this.props.componentEnterStack(<Contact></Contact>);
                    break;
                case "help":
                    this.props.componentEnterStack(<Help></Help>);
                    break;
                case "cls":
                    this.props.clearStack();
                    break;
                default:
                    this.props.componentEnterStack(<Unrecognized></Unrecognized>);
                    break;
            }
            this.props.triggerTerminalScroll();
            this.setState({
                currentCommand: ""
            });
        }
    }
    render() {
        return (
            <div id="command-input">
                >&nbsp;
                <input type="text" spellCheck="false" placeholder="commands..." value={this.state.currentCommand} onChange={this.updateCommand} onKeyUp={this.enterCommand} />
            </div>
        );
    }
}

let mapDispatchToProps = {
    componentEnterStack: componentEnterStack,
    clearStack: clearStack,
    triggerTerminalScroll: triggerTerminalScroll
};

let connector = connect(null, mapDispatchToProps);
export default connector(CommandInput);