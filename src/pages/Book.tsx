import { Fab, Stepper, Stack, Tooltip, StepLabel, Step } from "@mui/material"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const PageTitle = styled.h1`
    text-align: center;
`

export const Book = () => {
    const [activeStep, setActiveStep] = useState(0)

    console.log(activeStep)

    return <Container style={{ marginTop: "75px", maxWidth: "1900px" }}>
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
        <Stack direction="row" spacing={2}>
            <Tooltip title="Precedente">
                <Fab onClick={() => setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)} color="primary"><FontAwesomeIcon icon={faArrowLeft}/></Fab>
            </Tooltip>
            <Tooltip title="Successivo">
                <Fab onClick={() => setActiveStep(activeStep < 3 ? activeStep + 1 : activeStep)} color="primary"><FontAwesomeIcon icon={faArrowRight}/></Fab>
            </Tooltip>
        </Stack>
    </Container>
}