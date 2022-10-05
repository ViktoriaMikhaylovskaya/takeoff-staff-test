import styled from 'styled-components';
import { TextField } from '@mui/material';

export const ModalContainer = styled.div`
    background-color: rgba(138, 138, 138, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border: 2px solid blue;
    border-radius: 25px;
    width: 400px;
    background-color: white;
`

export const ModalTitle = styled.h1`
    margin-top: 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const NameField = styled(TextField)`
    width: 340px;
`

export const TelField = styled(TextField)`
    width: 340px;
`

export const MailField = styled(TextField)`
    width: 340px;
`