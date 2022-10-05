import styled from 'styled-components';
import { Button } from '@mui/material';

export const HomePageContainer = styled.div`
    background-color: rgba(171, 224, 245, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const ContactListButton = styled(Button)`
    width: 200px;
    justify-content: space-between;
`

export const LoginButton = styled(Button)`
    width: 200px;
    justify-content: space-between;
    margin-left: 50px;
`