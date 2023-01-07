import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

import styled from 'styled-components'

import { Container, NavDropdown } from "react-bootstrap";

import { Stack } from "@mui/material";

import NavbarBase from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";

const BrandFlex = styled(NavbarBase.Brand)`
    display: flex;
    column-gap: 10px;

    & > * {
        display: block;
        margin: auto;
    }
`

const StyledNavbar = styled(NavbarBase)`
    background: #ffffff54 !important;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    & * {
      color: #091929 !important;
    }

    border-bottom: solid 1px #000000b4;
`

export const Navbar = () => {
    return <StyledNavbar fixed="top" bg="light" expand="lg">
    <Container fluid>
        <BrandFlex href="/">
            <FontAwesomeIcon scale="2x" icon={faMountain} />
            <span>Comune di Sappada</span>
        </BrandFlex>
        <NavbarBase.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBase.Collapse id="basic-navbar-nav">
        <Stack direction="row" spacing={2}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="story">Storia</NavLink>
          <NavLink href="gallery">Galleria</NavLink>
          <NavLink href="book">Prenota</NavLink>
          <NavDropdown title="Contatti" id="basic-nav-dropdown">
            <NavDropdown.Item href="mailto://prolocosappada@gmail.com">Email</NavDropdown.Item>
            <NavDropdown.Item href="https://www.comune.sappada.bl.it">
              Sito Comunale
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://sappadadolomiti.com">
              sappadadolomiti.com
            </NavDropdown.Item>
            <NavDropdown.Item href="https://sappadadolomiti.com">
              altedolomiti.it
            </NavDropdown.Item>
          </NavDropdown>
        </Stack>
      </NavbarBase.Collapse>
    </Container>
  </StyledNavbar>
}