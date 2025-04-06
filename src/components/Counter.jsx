import React, { useState } from 'react';

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
            <button onClick={handleIncrement}>Increase Count</button>
            <button onClick={handleDecrement}>Decrease Count</button>
            <p>Count Value: {clicks}</p>
        </div>
    );
};

export default Button;
