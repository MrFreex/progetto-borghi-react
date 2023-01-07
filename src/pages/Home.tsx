import { Col, Container, Row } from "react-bootstrap";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { MyCarousel } from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCamera, faCarSide, faHistory, faSkiing } from "@fortawesome/free-solid-svg-icons";

import Adventure from "../assets/Icons/Adventure.svg";
import RoadTrip from '../assets/Icons/RoadTrip.svg'
import Mountain from '../assets/Icons/Mountain.svg'
import { IconButton, Button } from "@mui/material";

const Column = styled(Col)`
	text-align: center;
`;

type Section = { title: string; content: ReactNode; icon: string; index? : number };

type InvProp = {
	invert? : boolean;
}

const RightP = styled.p<InvProp>`
	text-align: ${ props => props.invert ? "left" : "right"};
	@media screen and (max-width: 800px) {
		& {
			text-align: center;
		}
	}
`;

const RightH2 = styled.h2<InvProp>`
	text-align: ${ props => props.invert ? "left" : "right"};
	@media screen and (max-width: 800px) {
		& {
			text-align: center;
		}
	}
`;

const SectionImg = styled.img`
	display: block;
	margin: auto;
	@media screen and (max-width: 800px) {
		& {
			margin: auto;
			width: 80%;
		}
	}
`;

export const Section = (props: Section) => {
	const index = props.index as number;
	const comps = [
		<Column style={{ margin: "auto" }}>
			<SectionImg src={props.icon} />
		</Column>,
		<Column style={{ margin: "auto" }}>
			<RightH2 invert={(index + 1) %2 === 0}>{props.title}</RightH2>
			<RightP invert={(index + 1) %2 === 0}>{props.content}</RightP>
		</Column>
	]
	const [first,second] = ((index) + 1) %2 === 0 ? [comps[1], comps[0]] : comps;

	return (
		<Row>
			{first}
			{second}
		</Row>
	);
};

export const Home = () => {
	const Sections: Section[] = [
		{
			title: "Storia",
			content: <>
				<Button href="/story" color="primary" variant="contained">
					<FontAwesomeIcon icon={faHistory} />
				</Button>
			</>,
			icon: Adventure,
		},
		{
			title: "Galleria",
			content: <>
				<Button href="/gallery" variant="contained">
					<FontAwesomeIcon icon={faCamera} />
				</Button>
			</>,
			icon: Mountain,
		},
		{
			title: "Prenota la tua visita",
			content: <>
				<Button href="/book" variant="contained">
					<FontAwesomeIcon icon={faCarSide} />
				</Button>
			</>,
			icon: RoadTrip,
		},
	];

	return (
		<div>
			<MyCarousel
				slides={[
					{
						title: "Sappada",
						subtitle: "Un paradiso sulle dolomiti Friulane",
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
			<Container style={{ paddingTop: "50px", maxWidth: "1300px" }}>
				<div style={{ display: "flex", flexDirection: "column", rowGap:"10ch" }}>
					{Sections.map((s,i) => {
						return <Section index={i} {...s} />;
					})}
				</div>
			</Container>
		</div>
	);
};
