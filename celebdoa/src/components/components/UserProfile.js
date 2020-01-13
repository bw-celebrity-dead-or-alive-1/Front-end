import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{"Name: Lambda school"}</Card.Header>
          <Card.Description>{'Username: Lambda1'}</Card.Description>
          <Card.Description>{"Age: 22 "}</Card.Description>
          <Card.Description>{"Summary: Loves celebrities"}</Card.Description>
          <Card.Description>{"Test Results: 86%"}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default UserCard;
