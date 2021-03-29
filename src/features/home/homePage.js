import React from "react";
import { Container, Segment, Header, Card } from "semantic-ui-react";
import LoginForm from "../user/loginForm";

const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h2" inverted>
          Welcome
        </Header>
        <Header as="h2" inverted>
          Please login to continue
        </Header>
        <Card centered>
          <Card.Content>
            <LoginForm />
          </Card.Content>
        </Card>
      </Container>
    </Segment>
  );
};

export default HomePage;
