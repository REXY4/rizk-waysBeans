import React, {useState, useEffect} from "react";
import {
  Container
} from "react-bootstrap";
import NavbarHeader from "./components/navigations/NavbarsHeader";
import MainRoutes from "./routes";

function App() {
  return (
    <>
    <NavbarHeader />
    <Container style={{
      padding : "50px"
    }}>
      <MainRoutes/>
    </Container>
    </>
  );
}

export default App;
