import React from 'react';
import './FlipBoard.css';
import FlipItem from './FlipItem';


class FlipBoard extends React.PureComponent {
    
    createFlipBoard() {
        return this.props.displayText.split('').map((character, i) => {
            const props = { ...this.props };
            props.displayText = character;
            props.previousText = props.previousText[i];
            return (
                <div style={{ marginLeft: i*150 }} className="flip-pane flip-pane-2">
                    <FlipItem type="flip-second" { ...props }/>
                </div>
            )
        })
    }

    render() {
        return (
            <div id="flipclock">
                { this.createFlipBoard() }
            </div>
        )
    }
}

export default FlipBoard;