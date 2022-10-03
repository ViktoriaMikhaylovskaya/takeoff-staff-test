import { CheckSharp as Save } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ContactsItem, ContactsItemsIcon } from '../../style';
import { ContactName, ContactTel, ContactMail, Edit, Delete } from './style';
import Label from '../../../../components/Label';
import { deleteContactAction, editContactAction } from '../../../../store/api-actions';
import { store } from '../../../../store';
import { Contact } from '../../../../types/contacts';

const ContactItem = ({ contact }: { contact: Contact }): JSX.Element => {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(contact.name);
    const [tel, setTel] = useState(contact.tel);
    const [mail, setMail] = useState(contact.mail);

    useEffect(() => { setName(contact.name) }, [contact])


    const handleClickEdit = () => {
        setIsEdit(!isEdit);
    };

    const deleteContact = () => {
        store.dispatch(deleteContactAction(contact.id));
    }

    const editContact = () => {
        store.dispatch(editContactAction({
            id: contact.id,
            name,
            tel,
            mail
        }));
    }

    return (
        <ContactsItem>
            {!isEdit
                ? <div>
                    <ContactName>{contact.name}</ContactName>
                    <ContactTel>tel: {contact.tel}</ContactTel>
                    <ContactMail>mail: {contact.mail}</ContactMail>
                </div>
                : <div>
                    <Label title='name:' marginBottom='10px'>
                        <TextField size='small' value={name} onChange={(e) => setName(e.target.value)} />
                    </Label>
                    <Label title='tel:' marginBottom='10px'>
                        <TextField size='small' value={tel} onChange={(e) => setTel(e.target.value)} />
                    </Label>
                    <Label title='mail:' marginBottom='12.5px'>
                        <TextField size='small' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </Label>
                </div>
            }
            <ContactsItemsIcon>
                {!isEdit
                    ? <Edit onClick={handleClickEdit} />
                    : <Button color='success' variant='text' size='small' onClick={handleClickEdit}>
                        <Save onClick={editContact} />
                    </Button>
                }
                <Delete onClick={deleteContact} />
            </ContactsItemsIcon>
        </ContactsItem>
    );
}

export default ContactItem;
