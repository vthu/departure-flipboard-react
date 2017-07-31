import React from 'react';
import './DepartureBoard.css';
import FlipItem from './FlipItem';


class DepartureBoard extends React.PureComponent {
    componentWillMount() {
        
    }
    render() {
        return (
            <div id="flipclock">

                <div className="flip-pane flip-pane-1">
                    <FlipItem type="flip-hour" />
                    <FlipItem type="flip-minute" />

                </div>{/*--/flip-pane-- */}

                <div className="flip-pane flip-pane-2">
                    <FlipItem type="flip-second" />
                </div>{/*--/flip-pane-- */}

            </div>
        )
    }
}

export default DepartureBoard;