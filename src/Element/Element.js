import React, { Component } from 'react';
import './Element.css';

export default class Element extends Component {
    render() {
        const {
                atomicNumber,
                symbol,
                name
            } = this.props;
        return (
            <div className="element">
                <span className="atomic-number">
                    {atomicNumber}
                </span>
                <span className="symbol">
                    {symbol}
                </span>
                <span className="name">
                    {name}
                </span>
            </div>
        );
    }
}