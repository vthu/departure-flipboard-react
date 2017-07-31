import React from 'react';

class FlipItem extends React.PureComponent {
    render() {
        const type = this.props.type;
        return (
            <ul className={`flip flip-item ${type}`}>
                <li className="before">
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">00</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">00</div>
                        </div>
                    </span>
                </li>
                <li className="active">
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">00</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">00</div>
                        </div>
                    </span>
                </li>
            </ul> 
        )
    }
}

export default FlipItem;