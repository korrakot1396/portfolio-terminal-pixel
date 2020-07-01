import { initialState } from './initialState.js';
import clonedeep from 'lodash.clonedeep';

export default function myReducer(prevState = initialState, action) {
    let nextState = clonedeep(prevState);
    switch (action.type) {
        case "COMPONENT_ENTER_STACK":
            nextState.guannanStack.push(action.data);
            return nextState;
        case "CLEAR_STACK":
            nextState.guannanStack = [];
            return nextState;
        case "TRIGGER_TERMINAL_SCROLL":
            nextState.terminalScrollTrigger = !nextState.terminalScrollTrigger;
            return nextState;
        default:
            return prevState;
    }
}