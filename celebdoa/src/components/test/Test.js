import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getCelebs } from '../../actions';
import { Button, Card, FormGroup, Form } from "react-bootstrap";

const Test = props => {
    const [scores, setScores] = useState();

    const fetchCelebs = e => {
        props.getCelebs();
    }

    useEffect(() => {
        fetchCelebs();
    }, [])

    useEffect(() => {
        console.log(scores);
    }, [scores])

    const gradeTest = e => {
        e.preventDefault();
        console.log(e);
    }

    const handleChange = e => {
        let [ alive, first, last, id, status ] = e.target.value.split(',');
        console.log(status);
        //status = status === "true" ? true : false;
        const ans = alive === status ? 1 : 0;
        let temp = [...scores];
        console.log("Temp: ", temp);
        //setScores();
        console.log(`${first} ${last}: ${ans === 1 ? "Correct" : "Incorrect"}`);
    }

    return (
        <>
          <form onSubmit={gradeTest}>
			<Card.Body style={{ padding: "2rem" }}>
              {props.celebs.map(celeb => {
                return(
                  <div key={celeb.id}>
                    {console.log(celeb)}
                    <img src={celeb.image_url} width="100%" />
                    <h2>{celeb.firstName} {celeb.lastName}</h2>
                    <FormGroup className="mb-3">
                      <Form.Check 
                        inline 
                        label="Dead" 
                        type="radio"
                        value={[celeb.alive, celeb.firstName, celeb.lastName, celeb.id - 1, false]}
                        onChange={handleChange}
                        name={`${celeb.firstName}-${celeb.lastName}-${celeb.id}`}
                      />
                      <Form.Check 
                        inline 
                        label="Alive" 
                        type="radio"
                        value={[celeb.alive, celeb.firstName, celeb.lastName, celeb.id - 1, true]}
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
        </>
    )
}

const mapStateToProps = state => ({
    isTesting: state.isTesting,
    celebs: state.celebs
})

export default connect(mapStateToProps, { getCelebs })(Test);