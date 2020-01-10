import React from 'react';

const TestComplete = props => {
    return (
        <>
            <h1>Test Complete</h1>
            <p>You scored {props.score} out of {props.questions}</p>
        </>
    );
}

export default TestComplete;