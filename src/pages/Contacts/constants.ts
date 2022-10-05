import * as yup from 'yup';

export const PHONE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PHONE_NUMBER_LiMIT = 11;
export const NUMBER_ERROR_MESSAGE = 'Please enter valid number. Example: 89000000019';

export const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required('Required'),
    tel: yup.string().required('Required').matches(PHONE_REG_EXP, { message: NUMBER_ERROR_MESSAGE, excludeEmptyString: false }).min(PHONE_NUMBER_LiMIT),
    email: yup.string().email(),
});
