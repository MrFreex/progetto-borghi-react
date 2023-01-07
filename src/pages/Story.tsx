import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const PageTitle = styled.h1`
	
	text-align: center;
`;

const Column = styled(Col)`
    display: flex;
    flex-direction: column;
    align-content: center;
`

const LogoSappada = styled.img`
    margin: 70px auto;
    max-width: 100px;
    display: block;
    //margin: auto;
    border-radius: 50%;
`

export const Story = () => {
	return (
		<Container>
			<Row style={{ justifyContent: "center" }}>
				<Column>
                    <LogoSappada alt="Stemma araldico Sappada" src="https://cdn.discordapp.com/attachments/1039274872737648765/1061239573910396989/og-stemma-sappada.jpg" />
					<PageTitle>Sappada, Nata dal legno</PageTitle>
					<p>
						<h3>Il nome</h3>
						Il toponimo Sappada viene da Žepod’n, il nome in dialetto tedesco dell’attuale borgata di Cima Sappada. La sua origine potrebbe
						essere zum poden, “sul pianoro”. Secondo altri Plod’n – come viene chiamata Sappada nell’idioma locale – sarebbe collegato al fiume
						Piave (Plavis) che nasce qui, derivante dalla radice indoeuropea plou, “scorrere” (dell’acqua).
					</p>
					<p>
						<h3>La Storia</h3>
						Di sicuro Sappada appartenne al Patriarcato di Aquileia. È probabile che a fondarla siano stati tirolesi emigrati dalla zona di
						Sillian, attratti dalle miniere di ferro citate per la prima volta nel 1334 e attive fino a Novecento inoltrato. La colonizzazione
						cominciò con la costruzione di 14 masi, corrispondenti alle attuali borgate, che in realtà sono 15 perché se ne aggiunse una più
						tardi.
					</p>
				</Column>
			</Row>
		</Container>
	);
};
