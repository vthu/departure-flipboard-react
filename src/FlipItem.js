import React from 'react';

class FlipItem extends React.PureComponent {
    render() {
        const { type } = this.props;
        return (
            <ul className={`flip flip-item ${type}`}>
                <li className={this.props.first ? 'active': 'before'}>
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{this.props.first ? this.props.displayText : this.props.previousText}</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{this.props.first ? this.props.displayText : this.props.previousText}</div>
                        </div>
                    </span>
                </li>
                <li className={this.props.second ? 'active': 'before' }>
                    <span>
                        <div className="flip-up">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{this.props.second ? this.props.displayText : this.props.previousText}</div>
                        </div>
                        <div className="flip-down">
                            <div className="flip-shadow"></div>
                            <div className="flip-text">{this.props.second ? this.props.displayText : this.props.previousText}</div>
                        </div>
                    </span>
                </li>
            </ul> 
        )
    }
}

export default FlipItem;