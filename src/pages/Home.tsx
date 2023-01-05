import { Col, Container, Row } from "react-bootstrap";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { MyCarousel } from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkiing } from "@fortawesome/free-solid-svg-icons";

import Adventure from '../assets/Icons/Adventure.svg'

const Column = styled(Col)`
	text-align: center;
`;

type Section = { title: string; content: ReactNode; icon: string };

const RightP = styled.p`
  text-align: right;
  @media screen and (max-width: 800px) {
    & {
      text-align: center;
    }
  }
`

const RightH2 = styled.h2`
  text-align: right;
  @media screen and (max-width: 800px) {
    & {
      text-align: center;
    }
  }
`

const SectionImg = styled.img`
  display:block;
  @media screen and (max-width: 800px) {
    & {
      margin: auto;
      width: 80%;
    }
  }
`

export const Section = (props: Section) => {
	return (
		<Row>
			<Column>
				<SectionImg src={props.icon} />
			</Column>
			<Column style={{ margin: "auto" }}>
				<RightH2>{props.title}</RightH2>
				<RightP>{props.content}</RightP>
			</Column>
		</Row>
	);
};

export const Home = () => {
	const Sections : Section[] = [
    {
      title: "Sburati",
      content: "Sborati",
      icon: Adventure
    }
  ];

	return (
		<div>
			<MyCarousel
				slides={[
					{
						title: "Sappada",
						subtitle: "Un paradiso sulle alpi Friulane",
						pic: "https://cdn.discordapp.com/attachments/1039274872737648765/1059980560887451688/SAPPADA-Sappada-Alte-Dolomiti-Montagna-Autentica-64.jpg",
					},
					{
						title: "Piste",
						dark: false,
						subtitle: "Famosa per le piste da sci, Sappada è molto frequentata dagli amanti della neve",
						pic: "https://cdn.discordapp.com/attachments/1039274872737648765/1060156007231275008/SAPPADA_A9R0857_Bandion.jpg",
					},
				]}
			/>
			<Container style={{ paddingTop: "50px", maxWidth: "700px" }}>
				<div>
          {
            Sections.map((s) => {
              return <Section {...s} />
            })
          }
        </div>
			</Container>
		</div>
	);
};
