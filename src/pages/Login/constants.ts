import * as yup from 'yup';

export const VALIDATION_SCHEMA = yup.object().shape({
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required').min(5),
});