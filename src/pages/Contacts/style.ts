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

export const ContactsItemsIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 20px;
`

export const SearchIcon = styled(PersonSearch)`
    padding: 10px;
`