import React from 'react';
import axios from 'axios';

class Test extends React.Component {
    // utilize state to hold history of test scores
    state = {
        pastScores: [],
        celebList: [
            {
                name: "CelebOne",
                alive: false
            },
            {
                name: "CelebTwo",
                alive: true
            }
        ],
        celebPosition: 0
    }

    score = 0;

    handleAnswer = answer => {
        let alive = this.state.celebList.celebs[celebPosition].alive;
        answer == alive ? score++ : null;
        this.state.celebPosition++;
    }

    render() {
        return(
            <>
                <h2>{this.state.celebList.celebs[celebPosition].name}</h2>
                <p>{this.state.celebList.celebs[celebPosition].dead}</p>
                <span>
                    <button onClick={handleAnswer(false)}>Dead</button>
                    <button onClick={handleAnswer(true)}>Alive</button>
                </span>
            </>
        );
    }
    // display scoreboard for right and wrong answers
    // get a list of celebrities
    // display name
    // display picture
    // display two buttons for Alive and Dead
}

export default Test;