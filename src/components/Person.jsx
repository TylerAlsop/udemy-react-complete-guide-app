import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>I'm {props.name} and I am {props.age} years old! :)</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default Person; 