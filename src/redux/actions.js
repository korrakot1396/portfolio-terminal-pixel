function componentEnterStack(componentObj) {
    return {
        data: componentObj,
        type: "COMPONENT_ENTER_STACK"
    };
}

function clearStack() {
    return {
        type: "CLEAR_STACK"
    };
}

function triggerTerminalScroll(){
    return {
        type: "TRIGGER_TERMINAL_SCROLL"
    };
}

export { componentEnterStack, clearStack, triggerTerminalScroll };