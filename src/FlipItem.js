import React from 'react';

class FlipItem extends React.PureComponent {
    render() {
        const { isFirstliActive, displayText, previousText, type } = this.props;
        return (
            <ul className={`flip flip-item ${type}`}>
                <li className={isFirstliActive ? 'active': 'before'}>
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{isFirstliActive ? displayText : previousText}</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{isFirstliActive ? displayText : previousText}</div>
                        </div>
                    </span>
                </li>
                <li className={!isFirstliActive ? 'active': 'before' }>
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{!isFirstliActive ? displayText : previousText}</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{!isFirstliActive ? displayText : previousText}</div>
                        </div>
                    </span>
                </li>
            </ul> 
        )
    }
}

export default FlipItem;