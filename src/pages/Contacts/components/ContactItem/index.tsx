import { useState } from 'react';
import { Formik } from 'formik';
import { CheckSharp as Save, EditOff } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';

import { VALIDATION_SCHEMA } from '../../constants';
import { ContactsItem, IconsContainer, ContactName, ContactTel, Contactemail, EditIcon, DeleteIcon } from './style';
import { deleteContactAction, editContactAction } from 'src/store/api-actions';
import { IContact } from 'src/types/contacts';
import { Label } from 'src/components';
import { store } from 'src/store';

const ContactItem = ({ contact }: { contact: IContact }): JSX.Element => {
    const [isEdit, setIsEdit] = useState(false);

    const handleClickEdit = () => {
        setIsEdit(!isEdit);
    }

    const deleteContact = () => {
        store.dispatch(deleteContactAction(contact.id));
    }

    const onHandleSubmit = (values: IContact) => {
        store.dispatch(editContactAction({
            id: contact.id,
            name: values.name,
            tel: values.tel,
            email: values.email,
        }));
        setIsEdit(!isEdit);
    }

    return (
        <ContactsItem>
            <Formik
                validationSchema={VALIDATION_SCHEMA}
                initialValues={contact}
                validateOnBlur
                onSubmit={onHandleSubmit}
                enableReinitialize
            >

                {({ values, errors, touched, handleChange, isValid, handleSubmit, dirty, handleReset }) => (
                    <form onSubmit={handleSubmit}>
                        {!isEdit
                            ? <div>
                                <ContactName>{contact.name}</ContactName>
                                <ContactTel>tel: {contact.tel}</ContactTel>
                                <Contactemail>email: {contact.email}</Contactemail>
                            </div>
                            : <div>
                                <Label title='name:' marginBottom='10px'>
                                    <TextField
                                        size='small'
                                        name={'name'}
                                        type={'name'}
                                        onChange={handleChange}
                                        value={values.name}
                                        error={touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}
                                    />
                                </Label>
                                <Label title='tel:' marginBottom='10px'>
                                    <TextField
                                        size='small'
                                        name={'tel'}
                                        type={'tel'}
                                        onChange={handleChange}
                                        value={values.tel}
                                        error={touched.tel && !!errors.tel}
                                        helperText={touched.tel && errors.tel}
                                    />
                                </Label>
                                <Label title='email:' marginBottom='12.5px'>
                                    <TextField
                                        size='small'
                                        name={'email'}
                                        type={'email'}
                                        onChange={handleChange}
                                        value={values.email}
                                        error={touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                    />
                                </Label>
                            </div>
                        }
                        <IconsContainer>
                            {!isEdit
                                ? <>
                                    <EditIcon onClick={handleClickEdit} />
                                    <DeleteIcon onClick={deleteContact} />
                                </>
                                : <>
                                    <Button
                                        color='success'
                                        variant='text'
                                        size='small'
                                        type={'submit'}
                                        disabled={!isValid && !dirty}
                                    >
                                        <Save />
                                    </Button>
                                    <EditOff onClick={() => {
                                        setIsEdit(!isEdit);
                                        handleReset();
                                    }} />
                                </>
                            }
                        </IconsContainer>
                    </form>
                )}
            </Formik>
        </ContactsItem>
    );
}

export default ContactItem;
