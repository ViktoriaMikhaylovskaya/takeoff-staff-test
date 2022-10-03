import styled from 'styled-components';
import { Edit as UIEdit, Delete as UIDelete } from '@mui/icons-material';

export const ContactName = styled.h3`
    margin-top: 9px;
`

export const ContactTel = styled.p`
    margin-top: 23px;
`

export const ContactMail = styled.p`
    margin-top: 28px;
`

export const Edit = styled(UIEdit)`
    margin-left: 20px;
    cursor: pointer;
`

export const Delete = styled(UIDelete)`
    cursor: pointer;
`