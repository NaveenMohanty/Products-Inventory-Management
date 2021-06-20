import React from "react";
import Header from "./Header";
import { Container } from "../../styled";

const Index = ({ children }) => {
  return (
    <Container direction="column" height="100%">
      <Header />
      <Container direction="column" height="92vh" background="#EDF8DF">
        {children}
      </Container>
    </Container>
  );
};
export default Index;
