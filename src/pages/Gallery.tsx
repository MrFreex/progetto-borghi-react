import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import styled from "styled-components";

const Fullscreen = styled(motion.div)`
	position: fixed;
    top:0;
    left:0;
    color: white !important;
    z-index: 1200;
    & * {
        z-index: 999;
    }
	background: #000000cb;
	width: 100vw;
	height: 100vh;
`;

const Centered = styled(motion.div)`
    position: relative;
    transform: translate(-50%,-50%);
    text-align: center;
    & > img {
        max-width: 80vw;
		max-height: 50vh;
        border-radius: 20px;
    }
    left:50%;
    top:50%;
`

const PictureFullscreen = (props: { img?: string, close : () => any }) => {
    const [Finitial,Fanimate] = [
        { opacity: 0, display: "none" }, { opacity: 1, display:"block" }
    ]

    const [Cinitial,Canimate] = [
        { scale: 0.1, x: "-50%", y: "-50%" }, { scale: 1.0, x: "-50%", y: "-50%" }
    ]

	return <Fullscreen onClick={props.close} transition={{ duration: 0.25 }} initial={props.img ? Finitial : Fanimate} animate={props.img ? Fanimate : Finitial}>
        <Centered transition={{ duration: 0.25, delay: 0.25 }} initial={props.img ? Cinitial : Canimate} animate={props.img ? Canimate : Cinitial}>
            { props.img && <img alt="Immagine della galleria" src={props.img} /> }
        </Centered>
    </Fullscreen>
};

const PicturesContainer = styled.div`
	display: flexbox;
    margin: 0 auto;

	& > img {
		border-radius: 20px;
		max-width: 200px;
		margin: 12px;
		transition: 0.15s;
	}

	& > img:hover {
		margin: 10px;
		cursor: pointer;
		transform: scale(1.05);
	}
`;

const Pictures: string[] = [
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253229255602206/SAPPADA-ULTIMI-FIORI-DI-SETTEMBRE.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253229528219738/SAPPADA-Sappada-Alte-Dolomiti-Montagna-Autentica-83-683x1024.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253229855387698/SAPPADA-Sappada-Alte-Dolomiti-Montagna-Autentica-64.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253230111244358/SAPPADA-LAGHI_D_OLBE_2.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253230404829194/SAPPADA-casa-tipica-particolare.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253230610362438/SAPPADA-baite-a-cima.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253230836858930/SAPPADA_MG_0426_Bandion.jpg",
	"https://cdn.discordapp.com/attachments/1039274872737648765/1061253231260479528/SAPPADA_A9R0777_Bandion.jpg",
    "https://images.unsplash.com/photo-1612687896397-e8714497b3b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FwcGFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605263011973-853416e1442f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FwcGFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
];

export const Gallery = () => {
    const [focusedImage, setFocused] = useState<string | undefined>()
	return (
		<>
			<PictureFullscreen close={() => setFocused(undefined)} img={focusedImage} />
			<Container style={{ marginTop: "75px", maxWidth: "1900px" }}>
				<h1>Galleria</h1>
				<PicturesContainer>
					{Pictures.map((pic) => {
						return <img onClick={() => setFocused(pic)} src={pic} alt="Immagine" />;
					})}
				</PicturesContainer>
			</Container>
		</>
	);
};
