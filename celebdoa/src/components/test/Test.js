import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCelebs } from '../../actions';
import { Button, Card, FormGroup, Form } from "react-bootstrap";

const Test = props => {
    const [scores, setScores] = useState([]);
    const [testing, setTesting] = useState(true);
    const [finished, setFinished] = useState(false);

    const fetchCelebs = e => {
        props.getCelebs();
    }

    useEffect(() => {
        fetchCelebs();
    }, [])

    useEffect(() => {
        let temp = [];
        props.celebs.map(e => {
            temp.push(0);
        });
        setScores(temp);
    }, [props.celebs])

    useEffect(() => {
        setTesting(false);
    }, [finished])

    useEffect(() => {
        console.log(testing);
    }, [testing])

    const gradeTest = e => {
        e.preventDefault();
        setFinished(true);
    }

    const testAgain = () => {
        setFinished(false);
    }

    const handleChange = e => {
        let [ alive, id, status ] = e.target.value.split(',');
        const ans = alive === status ? 1 : 0;
        let temp = [...scores];
        temp[id] = ans;
        setScores(temp);
    }

    return (
        <>
          {!finished ? (
          <form onSubmit={gradeTest}>
			<Card.Body style={{ padding: "2rem" }}>
              {props.celebs.map(celeb => {
                return(
                  <div key={celeb.id}>
                    <img src={celeb.image_url} width="100%" />
                    <h2>{celeb.firstName} {celeb.lastName}</h2>
                    <FormGroup className="mb-3">
                      <Form.Check 
                        inline 
                        label="Dead" 
                        type="radio"
                        value={[celeb.alive, celeb.id - 1, false]}
                        onChange={handleChange}
                        name={`${celeb.firstName}-${celeb.lastName}-${celeb.id}`}
                      />
                      <Form.Check 
                        inline 
                        label="Alive" 
                        type="radio"
                        value={[celeb.alive, celeb.id - 1, true]}
                        onChange={handleChange}
                        name={`${celeb.firstName}-${celeb.lastName}-${celeb.id}`}
                      />
                    </FormGroup>
                  </div>
                );
              })}
		    </Card.Body>
			<Button variant="primary" type="submit" style={{ width: "10rem", margin: "0 0 1.75rem" }}>
				Grade me!
			</Button>
		  </form>
          ) : (
            <>
                <h1>Test Complete!<br/>You scored {scores.reduce((total, acc) => total += acc, 0)} out of {scores.length}</h1>
                <button onClick={testAgain}>Test Again?</button>
            </>
          )}
        </>
    )
}

const mapStateToProps = state => ({
    celebs: state.celebs
})

export default connect(mapStateToProps, { getCelebs })(Test);