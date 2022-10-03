import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { LoginContainer, FormContainer } from './style';
import { loginAction } from '../../store/api-actions';
import { store } from '../../store';
import { AuthorizationStatus } from '../../store/auth/reducer';
import authSelectors from '../../store/auth/selectors';
import Label from '../../components/Label';
import User from '../Contacts/components/User';

const Login = (): JSX.Element => {
    const navigate = useNavigate();
    const { authorizationStatus } = useSelector(authSelectors);
    const [userData, setUserData] = useState({ name: '', password: '' });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        store.dispatch(loginAction(userData));
        navigate('/');
    }

    return (
        <LoginContainer>
            <h1>Login</h1>
            {authorizationStatus === AuthorizationStatus.Auth && <User />}
            <FormContainer onSubmit={handleSubmit}>
                <Label title='User name' marginBottom='20px'>
                    <TextField onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                </Label>
                <Label title='Password' marginBottom='30px'>
                    <TextField type='password' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </Label>

                <Button color='primary' variant='contained' type='submit'>Login</Button>
            </FormContainer>
        </LoginContainer>
    );
}

export default Login;
