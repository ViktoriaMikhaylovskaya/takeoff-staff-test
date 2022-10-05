import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HomePageContainer, ButtonsContainer, ContactListButton, LoginButton } from './style';
import { AuthorizationStatus } from 'src/store/auth/reducer';
import authSelectors from 'src/store/auth/selectors';

const HomePage = (): JSX.Element => {
    const { authorizationStatus } = useSelector(authSelectors);
    const navigate = useNavigate();

    const onClickContactsList = () => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
            navigate('/contacts');
        }
    }

    return (
        <HomePageContainer>
            <h1>Contacts</h1>
            <ButtonsContainer >
                <ContactListButton
                    color='primary'
                    disabled={authorizationStatus !== AuthorizationStatus.Auth}
                    variant='contained'
                    size='large'
                    onClick={onClickContactsList}
                >
                    Contacts list
                </ContactListButton>
                <LoginButton
                    color='primary'
                    variant='contained'
                    size='large'
                    onClick={() => navigate('/login')}
                >
                    Login
                </LoginButton>
            </ButtonsContainer>
        </HomePageContainer>
    )
}

export default HomePage;