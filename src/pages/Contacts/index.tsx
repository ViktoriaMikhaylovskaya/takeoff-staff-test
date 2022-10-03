import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { AddOutlined as AddIcon } from '@mui/icons-material';
import { ContactsConatiner, SearchContainer, SearchLabel, ContactsList, SearchIcon } from './style';
import { AuthorizationStatus } from '../../store/auth/reducer';
import contactsSelectors from '../../store/contacts/selectors';
import authSelectors from '../../store/auth/selectors';
import ContactItem from './components/ContactItem';
import Modal from './components/Modal';
import User from './components/User';

const Contacts = (): JSX.Element => {
    const state = useSelector(contactsSelectors);
    const { authorizationStatus } = useSelector(authSelectors);

    const [isShowModal, setIsShowModal] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(state.contactList);

    useEffect(() => { setFilteredContacts(state.contactList) }, [state.contactList])

    useEffect(() => {
        if (filteredContacts) {
            const filteredItems = state.contactList.filter((el: any) => el.name.includes(searchWord));
            setFilteredContacts(filteredItems);
        }
    }, [searchWord]);

    if (state.isLoading) {
        return <h1>Loading...</h1>
    }
    if (state.error) {
        return <h1>Error!</h1>
    }

    isShowModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';

    return (
        <ContactsConatiner>
            {isShowModal && <Modal onCancelButtonClick={setIsShowModal} />}
            {authorizationStatus === AuthorizationStatus.Auth && <User />}

            <h1>Contacts</h1>
            <SearchContainer>
                <SearchLabel>
                    <TextField size='small' value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
                    <SearchIcon />
                </SearchLabel>
                <Button color='primary' variant='contained' onClick={() => setIsShowModal(true)}>
                    <AddIcon />
                    Add contact
                </Button>
            </SearchContainer>

            {filteredContacts?.length > 0 && (
                <ContactsList>
                    {filteredContacts?.map((el: any) =>
                        <ContactItem key={el.id} contact={el} />
                    )}
                </ContactsList>)
            }
        </ContactsConatiner >
    );
}

export default Contacts;
