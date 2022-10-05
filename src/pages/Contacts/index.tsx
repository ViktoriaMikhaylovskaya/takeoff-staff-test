import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { AddOutlined as AddIcon } from '@mui/icons-material';

import { ContactsConatiner, SearchContainer, SearchLabel, ContactsList, SearchIcon } from './style';
import { AuthorizationStatus } from 'src/store/auth/reducer';
import { ContactItem, Modal, User } from 'src/pages';
import { IContact } from 'src/types/contacts';
import { Spinner } from 'src/components';
import contactsSelectors from 'src/store/contacts/selectors';
import authSelectors from 'src/store/auth/selectors';

const Contacts = (): JSX.Element => {
    const state = useSelector(contactsSelectors);
    const { authorizationStatus } = useSelector(authSelectors);

    const [isShowModal, setIsShowModal] = useState(false);
    const [searchWord, setSearchWord] = useState('');

    const filteredContacts = useMemo(() => {
        if (searchWord.length > 0) {
            return state.contactList.filter((el: IContact) => el.name.includes(searchWord));
        }

        return state.contactList;
    }, [searchWord, state.contactList]);


    isShowModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';

    if (state.isLoading) {
        return <Spinner />
    }

    if (state.error) {
        return <h1>Error! Try again.</h1>
    }

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
                    {filteredContacts?.map((el: IContact) =>
                        <ContactItem key={el.id} contact={el} />
                    )}
                </ContactsList>)
            }
        </ContactsConatiner >
    );
}

export default Contacts;
