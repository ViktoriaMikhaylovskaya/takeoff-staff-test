import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';

import { VALIDATION_SCHEMA } from './constants';
import { LoginContainer, FormContainer } from './style';
import { AuthorizationStatus } from 'src/store/auth/reducer';
import { loginAction } from 'src/store/api-actions';
import { store } from 'src/store';
import authSelectors from 'src/store/auth/selectors';
import Label from 'src/components/Label';
import User from '../Contacts/components/User';

const Login = (): JSX.Element => {
    const navigate = useNavigate();
    const { authorizationStatus } = useSelector(authSelectors);

    return (
        <LoginContainer>
            <h1>Login</h1>
            {authorizationStatus === AuthorizationStatus.Auth && <User />}

            <Formik
                validationSchema={VALIDATION_SCHEMA}
                initialValues={
                    {
                        email: '',
                        password: ''
                    }}
                validateOnBlur
                onSubmit={(values) => {
                    store.dispatch(loginAction(values));
                    navigate('/');
                }}
            >

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <div>
                            <Label title='email' marginBottom='20px'>
                                <TextField
                                    name={'email'}
                                    type={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Label>
                        </div>

                        <div>
                            <Label title='Password' marginBottom='20px'>
                                <TextField
                                    name={'password'}
                                    type={'password'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                />
                            </Label>
                        </div>

                        <Button
                            type={'submit'}
                            disabled={!isValid && !dirty}
                            color='primary'
                            variant='contained'
                        >
                            Login
                        </Button>
                    </FormContainer>
                )}
            </Formik>
        </LoginContainer>
    );
}

export default Login;
