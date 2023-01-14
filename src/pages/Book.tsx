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
} from "@mui/material";
import { Component, FunctionComponent, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
				<TextField value={data["name"]} onChange={(el) => setByKey("name", el.target.value)} variant="standard" label="Nome" />
				<TextField value={data["surname"]} onChange={(el) => setByKey("surname", el.target.value)} variant="standard" label="Cognome" />
			</Stack>
			<h4>Contatti</h4>
			<Stack direction="row" spacing={2}>
				<TextField
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
    return <>
    </>
}

export const Book = () => {
	const [activeStep, setActiveStep] = useState(0);

    const today = new Date().toLocaleString("it", { day: "2-digit", year: "numeric", month: "2-digit" }).split("/").reverse().join("-")

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
		</Container>
	);
};
