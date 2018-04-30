import React from 'react';

const Input = props => (
    <input type='text' value={props.value} onChange={(e) => props.changed(e.target.value)} />
);

export default Input;