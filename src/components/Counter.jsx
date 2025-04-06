import React, { useState } from 'react';
import classes from './Button.module.css';

const Button = () => {
    const [clicks, setClicks] = useState(0);
    const handleIncrement = () => {
        setClicks(clicks + 1);
    }
    const handleDecrement = () => {
        if (clicks != 0) {
            setClicks(clicks - 1);
        }
    }
    return (
        <div>
            <button className={classes.button} onClick={handleIncrement}>Increase Count</button>
            <button className={classes.button} onClick={handleDecrement}>Decrease Count</button>
            <p>Count Value: {clicks}</p>
        </div>
    );
};

export default Button;
