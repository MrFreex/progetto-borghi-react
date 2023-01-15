import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"
import styled from "styled-components"

const Center = styled.div`
    position: absolute;
    text-align:center;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    align-content: center;
    row-gap: 2ch;

    & > a {
        margin: auto;
    }
`

export const BookConfirm = () => {
    return <Center>
        <h2>
            Grazie per aver confermato la tua prenotazione!
        </h2>
        <Button startIcon={<FontAwesomeIcon icon={faHome} />} variant="contained" href="/">Torna alla home</Button>
    </Center>
}

export const Page404 = () => {
    
    return <Center>
        <h1>
            404
        </h1>
        <Button startIcon={<FontAwesomeIcon icon={faHome} />} variant="contained" href="/">Torna alla home</Button>
    </Center>

}