import styled from 'styled-components';
import { PersonSearch } from '@mui/icons-material';

export const ContactsConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 50px
`

export const SearchLabel = styled.label`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`

export const ContactsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: 50px 100px;
    padding: 0 50px;
`

export const SearchIcon = styled(PersonSearch)`
    padding: 10px;
`