import { Button } from '@mui/material';
import { ExitToApp, PersonSharp as UserIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { store } from '../../../../store';
import { logoutAction } from '../../../../store/api-actions';
import { UserContainer, UserName, UserInfo } from './style';
import authSelectors from '../../../../store/auth/selectors';


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
                <UserName>{user.name}</UserName>
            </UserInfo>
            <Button color='primary' variant='contained' size='small' onClick={logout}>
                Logout
                <ExitToApp style={{ marginLeft: '5px' }} />
            </Button>
        </UserContainer>
    )
}

export default User;