import React from "react";
import { Container, Segment, Header, Card } from "semantic-ui-react";
import RegisterForm from '../user/registerForm';

const register = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h2" inverted>
          Please tell us little about you !
        </Header>
        <Card centered>
          <Card.Content>
            <RegisterForm />
          </Card.Content>
        </Card>
      </Container>
    </Segment>
  );
};

export default register;
