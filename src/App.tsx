import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { store } from './store';
import { PrivateRoute } from 'src/components';
import { AuthorizationStatus } from './store/auth/reducer';
import { Contacts, Login, NotFoundPage, HomePage } from 'src/pages';
import { fetchContactsAction, getUserAction } from './store/api-actions';

store.dispatch(fetchContactsAction());
store.dispatch(getUserAction());

function App() {
  const authorizationStatus = localStorage.getItem('status') === AuthorizationStatus.Auth ?
    AuthorizationStatus.Auth : AuthorizationStatus.NoAuth

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/contacts'} element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}>
            <Contacts />
          </PrivateRoute>
        } />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/'} element={<HomePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
