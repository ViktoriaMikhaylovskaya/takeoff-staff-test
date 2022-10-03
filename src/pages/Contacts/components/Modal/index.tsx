import { useEffect, useState } from 'react';
import { store } from '../../../../store';
import { Button } from '@mui/material';
import { addContactAction } from '../../../../store/api-actions';
import { ModalContainer, ModalWrapper, ModalTitle, ButtonsContainer, NameField, TelField, MailField } from './style';
import Label from '../../../../components/Label/index';


const Modal = ({ onCancelButtonClick }: { onCancelButtonClick: (val: boolean) => void }): JSX.Element => {
    const [newContact, setNewContact] = useState({ name: '', tel: '', mail: '' });
    const [isShowHelpText, setIsShowHelpText] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const { name, tel, mail } = newContact;

    useEffect(() => {
        if (name !== '' && tel !== '' && mail !== '') {
            setIsValid(true);
        }
    }, [name, tel, mail])

    const sendNewContact = () => {
        setIsShowHelpText(true);

        if (isValid) {
            store.dispatch(addContactAction(newContact));
            onCancelButtonClick(false);
        }
    };

    return (
        <ModalContainer>
            <ModalWrapper>
                <ModalTitle>New contact</ModalTitle>
                <Label title='Name:' marginBottom='20px'>
                    <NameField
                        error={isShowHelpText && name === ''}
                        helperText={isShowHelpText && name === '' && 'required'}
                        value={name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} />
                </Label>
                <Label title='Tel:' marginBottom='20px'>
                    <TelField
                        error={isShowHelpText && tel === ''}
                        helperText={isShowHelpText && tel === '' && 'required'}
                        value={tel}
                        onChange={(e) => setNewContact({ ...newContact, tel: e.target.value })} />
                </Label>
                <Label title='Mail:' marginBottom='20px'>
                    <MailField
                        error={isShowHelpText && mail === ''}
                        helperText={isShowHelpText && mail === '' && 'required'}
                        value={mail}
                        onChange={(e) => setNewContact({ ...newContact, mail: e.target.value })} />
                </Label>

                <ButtonsContainer>
                    <Button color='primary' variant='contained' onClick={() => onCancelButtonClick(false)}>Сancel</Button>
                    <Button color='success' variant='contained' onClick={sendNewContact}>Save</Button>
                </ButtonsContainer>
            </ModalWrapper>
        </ModalContainer>
    );
}

export default Modal;
