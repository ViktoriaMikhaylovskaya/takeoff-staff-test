import styled from 'styled-components';
import { Edit as UIEdit, Delete as UIDelete } from '@mui/icons-material';

export const ContactsItem = styled.li`
    width: 200px;
    padding: 20px;
    border: 2px solid blue;
    border-radius: 25px;
    font-size: 20px;

    &:hover {
        background-color: rgba(181, 215, 235, 0.4);
        box-shadow: 0px 0px 48px -3px rgba(34, 60, 80, 0.3);
    }
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 20px;
`

export const ContactName = styled.h3`
    margin-top: 9px;
`

export const ContactTel = styled.p`
    margin-top: 23px;
`

export const Contactemail = styled.p`
    margin-top: 28px;
`

export const EditIcon = styled(UIEdit)`
    margin-left: 20px;
    cursor: pointer;

    &:hover {
        fill: blue;
    }
`

export const DeleteIcon = styled(UIDelete)`
    cursor: pointer;

    &:hover {
        fill: red;
    }
`
