import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../store/auth/reducer';

type Props = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
}

const PrivateRoute = ({ authorizationStatus, children }: Props): JSX.Element => (
    authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Navigate to={'/'} />
);

export default PrivateRoute;
