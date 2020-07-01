import React from 'react';
import { connect } from 'react-redux';

class CurrentListedItems extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.guannanStack.map((currItem, index) => (
                            <li key={index}>{currItem}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        guannanStack: state.guannanStack
    };
};

export default connect(mapStateToProps, null)(CurrentListedItems);