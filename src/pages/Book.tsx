import {
	Fab,
	Stepper,
	FormControl,
	Stack,
	Tooltip,
	StepLabel,
	Step,
	TextField,
	Autocomplete,
	Select,
	MenuItem,
	InputLabel,
	Input,
	Slider,
	Button,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import { Component, FunctionComponent, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCheck as faCheckMark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const PageTitle = styled.h1`
	text-align: center;
`;

const StepContent = styled.div`
	margin: 30px 0;
`;

type StringIndexed = { [key: string]: string | number };

interface StepProps {
	setData: (data: StringIndexed) => any;
	data: StringIndexed;
}

const PersonalInfoStep = (props: StepProps) => {
	const { data, setData } = props;

	const setByKey = (k: string, v: string) => {
		setData({
			...data,
			[k]: v,
		});
	};

	return (
		<Stack spacing={2}>
			<h4>Dati personali</h4>
			<Stack direction="row" spacing={2}>
				<TextField required value={data["name"]} onChange={(el) => setByKey("name", el.target.value)} variant="standard" label="Nome" />
				<TextField required value={data["surname"]} onChange={(el) => setByKey("surname", el.target.value)} variant="standard" label="Cognome" />
			</Stack>
			<h4>Contatti</h4>
			<Stack direction="row" spacing={2}>
				<TextField
					required
					value={data["phone"]}
					onChange={(el) => setByKey("phone", el.target.value)}
					type="tel"
					variant="standard"
					label="Numero di telefono"
				/>
				<TextField value={data["email"]} onChange={(el) => setByKey("email", el.target.value)} type="email" variant="standard" label="Email" />
			</Stack>
		</Stack>
	);
};

const TripInfoStep = (props: StepProps) => {
	const { data, setData } = props;
	const setByKey = (k: string, v: string | number) => {
		setData({
			...data,
			[k]: v,
		});
	};

	return (
		<Stack spacing={2}>
			<h4>Pensione</h4>
			<Stack spacing={2} direction="row">
				<FormControl>
					<InputLabel>Pensione</InputLabel>
					<Select label="Pensione" onChange={(ev) => setByKey("stayPlan", ev.target.value)} value={props.data.stayPlan}>
						<MenuItem value={"half"}>Mezza</MenuItem>
						<MenuItem value={"full"}>Completa</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel>Albergo</InputLabel>
					<Select label="Albergo" onChange={(ev) => setByKey("hotel", ev.target.value)} value={props.data.hotel}>
						<MenuItem value={"Hotel San Giorgio"}>Hotel San Giorgio</MenuItem>
						<MenuItem value={"Villa d'Este"}>Villa d'Este</MenuItem>
						<MenuItem value={"Hotel Giardino di Roma"}>Hotel Giardino di Roma</MenuItem>
						<MenuItem value={"Hotel Continental"}>Hotel Continental</MenuItem>
						<MenuItem value={"Hotel Riva del Lago"}>Hotel Riva del Lago</MenuItem>
						<MenuItem value={"Hotel Bellagio"}>Hotel Bellagio</MenuItem>
						<MenuItem value={"Hotel Villa Paradiso"}>Hotel Villa Paradiso</MenuItem>
						<MenuItem value={"Hotel della Rosa"}>Hotel della Rosa</MenuItem>
						<MenuItem value={"Hotel Miramare"}>Hotel Miramare</MenuItem>
						<MenuItem value={"Hotel Rosa delle Alpi"}>Hotel Rosa delle Alpi</MenuItem>
						<MenuItem value={"Hotel Il Colosseo"}>Hotel Il Colosseo</MenuItem>
						<MenuItem value={"Hotel La Villa"}>Hotel La Villa</MenuItem>
						<MenuItem value={"Hotel Le Terrazze"}>Hotel Le Terrazze</MenuItem>
						<MenuItem value={"Hotel Il Girasole"}>Hotel Il Girasole</MenuItem>
						<MenuItem value={"Hotel La Perla"}>Hotel La Perla</MenuItem>
						<MenuItem value={"Hotel Il Castello"}>Hotel Il Castello</MenuItem>
						<MenuItem value={"Hotel La Cascata"}>Hotel La Cascata</MenuItem>
						<MenuItem value={"Hotel La Torre"}>Hotel La Torre</MenuItem>
						<MenuItem value={"Hotel Il Porto"}>Hotel Il Porto</MenuItem>
						<MenuItem value={"Hotel Il Mare"}>Hotel Il Mare</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<h4>Data</h4>
			<Stack spacing={2} direction="row">
				<FormControl>
					<h6>Data di arrivo</h6>
					<TextField
                        onChange={(ev) => setByKey("arrival", ev.target.value)}

						onBlur={(ev) => {
							if ((data.departure && new Date(ev.target.value).getTime() < new Date(data.departure).getTime()) || !data.departure) {
								setByKey("arrival", ev.target.value);
							} else {
                                setByKey("arrival", data.departure)
                            }
						}}
                        
                        value={data.arrival}
						
                        type="date"
					/>
				</FormControl>
				<FormControl>
					<h6>Data di partenza</h6>
					<TextField
                        onChange={(ev) => setByKey("departure", ev.target.value)}
						onBlur={(ev) => {
                            if ((data.arrival && new Date(ev.target.value).getTime() > new Date(data.arrival).getTime()) || !data.arrival) {
								setByKey("departure", ev.target.value);
							} else {
                                setByKey("departure", data.arrival)
                            }
						}}

                        value={data.departure}

						type="date"
					/>
				</FormControl>
			</Stack>
            <h4>Ospiti</h4>
			<Stack spacing={2} direction="row">
                <Tooltip title="Almeno un adulto deve essere presente">
                    <TextField
                        onChange={(ev) => {
                            if (Number(ev.target.value) > 0) {
                                setByKey("adults", ev.target.value);
                            }
                        }}
                        value={props.data.adults}
                        label="Adulti"
                        type="number"
                    />
                </Tooltip>
				
				<TextField
					onChange={(ev) => {
						if (Number(ev.target.value) >= 0) {
							setByKey("kids", ev.target.value);
						}
					}}
					value={props.data.kids}
					label="Bambini"
					type="number"
				/>
			</Stack>
		</Stack>
	);
};

type ConfirmationProps = {
    state : [StringIndexed, React.Dispatch<React.SetStateAction<StringIndexed>>][]
};

const ConfirmationStep = (props : ConfirmationProps) => {
	const [hasAccepted, setAccepted] = useState(false);
    return <Stack spacing={2}>
		<h2>Confermi di voler concludere la prenotazione, {props.state[0][0].name} {props.state[0][0].surname} ?</h2>
		<FormControlLabel control={<Checkbox onChange={(ev) => setAccepted(ev.target.checked)} />} label="Acconsento alla registrazione dei dati immessi e all'inoltro all'albergo scelto secondo le normative europee" />
		<Button disabled={!hasAccepted} href="bookconfirm" startIcon={<FontAwesomeIcon icon={faCheckMark} />} variant="contained">Conferma</Button>
	</Stack>
}

export const Book = () => {
	const [activeStep, setActiveStep] = useState(0);

    const today = new Date().toLocaleString("it", { day: "2-digit", year: "numeric", month: "2-digit" }).split("/").reverse().join("-")

	const required = [
		["name", "surname", "phone"],
		["stayPlan", "hotel", "departure", "arrival"]
	]

	const StepsState = [
		useState<StringIndexed>({}),
		useState<StringIndexed>({
			kids: 0,
			adults: 1,
			stayPlan: "half",
			hotel: "Hotel San Giorgio",
            arrival: today,
            departure: today
		}),
	];

	const Steps: ((props: StepProps) => JSX.Element)[] = [PersonalInfoStep, TripInfoStep];

	const gen = () => {
		const Component = Steps[activeStep];

		if (activeStep >= StepsState.length) {
			for (let i = 0; i < StepsState.length; i++) {
				const v = StepsState[i][0];
				for (let k of required[i]) {
					if (!v[k]) {
						setActiveStep(i);
						alert("Devi prima compilare i campi obbligatori!");
						return;
					}
				}
			}
		}

		return activeStep < StepsState.length ? (
			<motion.div key={activeStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0 }}>
				<Component data={StepsState[activeStep][0]} setData={StepsState[activeStep][1]} />
			</motion.div>
		) : <motion.div key={activeStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0 }}>
            <ConfirmationStep state={StepsState} />
        </motion.div>;
	};

	return (
		<Container style={{ marginTop: "75px", maxWidth: "1900px" }}>
			<Stack spacing={5}>
				<div>
					<PageTitle>Prenota</PageTitle>
					<Stepper activeStep={activeStep}>
						<Step>
							<StepLabel>Dettagli Personali</StepLabel>
						</Step>
						<Step>
							<StepLabel>Informazioni sul viaggio</StepLabel>
						</Step>
						<Step>
							<StepLabel>Conferma</StepLabel>
						</Step>
					</Stepper>
					<StepContent>{gen()}</StepContent>
					<Stack direction="row" spacing={2}>
						<Tooltip title="Precedente">
							<Fab onClick={() => setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)} color="primary">
								<FontAwesomeIcon icon={faArrowLeft} />
							</Fab>
						</Tooltip>
						<Tooltip title="Successivo">
							<Fab onClick={() => setActiveStep(activeStep < 3 ? activeStep + 1 : activeStep)} color="primary">
								<FontAwesomeIcon icon={faArrowRight} />
							</Fab>
						</Tooltip>
					</Stack>
				</div>
				<div style={{ margin: "50px auto 0 auto", minWidth: "60%", maxWidth: "1200px" }}>
					<iframe width="100%" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=12.491798400878908%2C46.48373752813869%2C12.86602020263672%2C46.645429498183326&amp;layer=mapnik&amp;marker=46.564761777806275%2C12.678909301757812" style={{ border: "1px solid black", flexGrow: 1 }}></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=46.5648&amp;mlon=12.6789#map=12/46.5646/12.6789">Visualizza mappa ingrandita</a></small>
				</div>
			</Stack>
		</Container>
	);
};
