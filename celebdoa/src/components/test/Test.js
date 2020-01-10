import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCelebs } from '../../actions';

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
        finished: false,
        isTesting: false
    }

    fetchCelebs = e => {
        e.preventDefault();
        this.props.getCelebs();
    }

    handleAnswer = answer => {
        if(answer == this.state.celeb.status) {
            this.state.score++;
        }
        this.state.celebPosition++;
        this.state.celeb = initialList[this.state.celebPosition];
        if(this.state.celebPosition >= initialList.length) {
            this.state.finished = true;
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

const mapStateToProps = state => {
    /*
    celebPosition: state.celebPosition,
    score: state.score,
    celeb: state.celeb,
    finished: state.finished,
    isTesting: state.isTesting
    */
}

export default connect(mapStateToProps, { getCelebs })(Test);