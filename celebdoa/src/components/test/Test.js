import React from 'react';
import axios from 'axios';

import TestCard from './TestCard';
import TestComplete from './TestComplete';

const initialList = [
    {
        name: "Celeb One",
        status: "Dead"
    },
    {
        name: "Celeb Two",
        status: "Alive"
    },
    {
        name: "Celeb Three",
        status: "Dead"
    },
    {
        name: "Celeb Four",
        status: "Alive"
    }
]

class Test extends React.Component {
    state = {
        celebPosition: 0,
        score: 0,
        celeb: initialList[0],
        finished: false
    }

    componentDidMount() {
        // Perform axios request and set the list variable to it
        // Assign the first element in the list array to celeb
    }

    handleAnswer = answer => {
        if(!this.state.finished){
            if(answer == this.state.celeb.status) {
                this.state.score++;
            }
            this.state.celebPosition++;
            this.state.celeb = initialList[this.state.celebPosition];
            if(this.state.celebPosition >= initialList.length) {
                this.state.finished = true;
            }
        }
        this.forceUpdate();
    }

    render() {
        return(
            <>
                {this.state.finished
                    ? (<TestComplete score={this.state.score} questions={initialList.length}/>)
                    : (<TestCard celeb={this.state.celeb} answer={this.handleAnswer}/>)
                }
                
            </>
        );
    }
}

export default Test;