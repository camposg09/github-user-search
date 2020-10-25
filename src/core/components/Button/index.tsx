import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <div className="div-button">
        <button className="btn">
            <h5 className="font-weight-400">{text}</h5>
        </button>
    </div>
);

export default Button;