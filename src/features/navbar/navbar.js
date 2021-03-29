import React from "react";
import { Menu, Container } from "semantic-ui-react";
import CustomDropdown from "./dropdown"; 

const Navbar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          User Home Page
        </Menu.Item>
        <Menu.Item position="right">
            <CustomDropdown />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
