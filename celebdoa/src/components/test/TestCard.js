import React from 'react';

const TestCard = props => {

    return(
        <>
            <h2>{props.celeb.name}</h2>
            <p>{props.celeb.status}</p>
            <span>
                <button onClick={() => props.answer("Dead")}>Dead</button>
                <button onClick={() => props.answer("Alive")}>Alive</button>
            </span>
        </>
    );
}

export default TestCard;