import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HomePageContainer } from './style';
import { AuthorizationStatus } from '../../store/auth/reducer';
import authSelectors from '../../store/auth/selectors';

const HomePage = (): JSX.Element => {
    const navigate = useNavigate();
    const { authorizationStatus } = useSelector(authSelectors);

    const onClickContactsList = () => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
            navigate('/contacts');
        }
    }

    return (
        <HomePageContainer>
            <h1>Contacts</h1>
            <div >
                <Button color='primary' disabled={authorizationStatus !== AuthorizationStatus.Auth} variant='contained' size='large' onClick={onClickContactsList} style={{ width: '200px', marginRight: '20px', justifyContent: 'space-between' }}>
                    Contacts list
                </Button>
                <Button color='primary' variant='contained' size='large' onClick={() => navigate('/login')} style={{ width: '200px', justifyContent: 'space-between' }}>
                    Login
                </Button>
            </div>
        </HomePageContainer>
    )
}

export default HomePage;