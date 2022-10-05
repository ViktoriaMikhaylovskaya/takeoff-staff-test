import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { PersonSharp as UserIcon } from '@mui/icons-material';

import { UserContainer, UserName, UserInfo, ExitIcon } from './style';
import { store } from 'src/store';
import { logoutAction } from 'src/store/api-actions';
import authSelectors from 'src/store/auth/selectors';


const User = (): JSX.Element => {
    const { user } = useSelector(authSelectors);
    const navigate = useNavigate();

    const logout = () => {
        store.dispatch(logoutAction());
        navigate('/login');
    }

    return (
        <UserContainer>
            <UserInfo>
                <UserIcon fontSize='large' />
                <UserName>{user.email}</UserName>
            </UserInfo>
            <Button color='primary' variant='contained' size='small' onClick={logout}>
                Logout
                <ExitIcon />
            </Button>
        </UserContainer>
    )
}

export default User;