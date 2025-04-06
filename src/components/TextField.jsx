
import React, { useState } from 'react';


const TextField = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form>
            <input
                type="text"
                value={inputValue}
                placeholder="Enter text"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Text Field Value: {inputValue}</h2>
        </form>
        
    );
};

export default TextField;