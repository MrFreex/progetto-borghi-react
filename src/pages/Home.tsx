import { Alert, Carousel as BaseCarousel, Col, Container, Row } from "react-bootstrap"
import { Lipsum } from "../components/Lipsum"
import { useState } from "react";
import styled from "styled-components";
import { MyCarousel } from "../components/Carousel";

const Column = styled(Col)`
  text-align: center;
`

export const Home = () => {
    return <div>
        <MyCarousel slides={[
          { title: "Sappada", subtitle: "Un posto in mezzo al nulla", pic: "https://cdn.discordapp.com/attachments/1039274872737648765/1059980560887451688/SAPPADA-Sappada-Alte-Dolomiti-Montagna-Autentica-64.jpg" },
          { title: "Sappada2", dark: true, subtitle: "Abbiamo pure la neve", pic: "https://cdn.discordapp.com/attachments/1039274872737648765/1060156007231275008/SAPPADA_A9R0857_Bandion.jpg" }
        ]} />
        <Container>
          <Row>
            <Column>A</Column>
            <Column>B</Column>
            <Column>C</Column>
          </Row>
        </Container>
    </div>
}