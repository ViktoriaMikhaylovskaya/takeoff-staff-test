import { Formik } from 'formik';
import { Button } from '@mui/material';

import { VALIDATION_SCHEMA } from '../../constants';
import { store } from 'src/store';
import { addContactAction } from 'src/store/api-actions';
import { ModalContainer, ModalWrapper, ModalTitle, ButtonsContainer, NameField, TelField, MailField } from './style';
import { Label } from 'src/components';


const Modal = ({ onCancelButtonClick }: { onCancelButtonClick: (val: boolean) => void }): JSX.Element => {
    return (
        <ModalContainer>
            <ModalWrapper>
                <ModalTitle>New contact</ModalTitle>
                <Formik
                    validationSchema={VALIDATION_SCHEMA}
                    initialValues={
                        {
                            name: '',
                            tel: '',
                            email: '',
                        }}
                    validateOnBlur
                    onSubmit={(values) => {
                        store.dispatch(addContactAction(values));
                        onCancelButtonClick(false);
                    }}
                >

                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form onSubmit={handleSubmit}>

                            <Label title='Name:' marginBottom='20px'>
                                <NameField
                                    name={'name'}
                                    type={'name'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    error={touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                />
                            </Label>

                            <Label title='Tel:' marginBottom='20px'>
                                <TelField
                                    name={'tel'}
                                    type={'tel'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tel}
                                    error={touched.tel && !!errors.tel}
                                    helperText={touched.tel && errors.tel}
                                />
                            </Label>

                            <Label title='Email:' marginBottom='20px'>
                                <MailField
                                    name={'email'}
                                    type={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Label>

                            <ButtonsContainer>
                                <Button color='primary' variant='contained' onClick={() => onCancelButtonClick(false)}>Сancel</Button>
                                <Button
                                    color='success'
                                    variant='contained'
                                    type={'submit'}
                                    disabled={!isValid && !dirty}
                                >
                                    Save
                                </Button>
                            </ButtonsContainer>
                        </form>
                    )}
                </Formik>
            </ModalWrapper>
        </ModalContainer>
    );
}

export default Modal;
