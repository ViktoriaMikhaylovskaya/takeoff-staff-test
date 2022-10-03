import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { store } from './store';
import { fetchContactsAction, getUserAction } from './store/api-actions';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import { AuthorizationStatus } from './store/auth/reducer';

store.dispatch(fetchContactsAction());
store.dispatch(getUserAction());

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/contacts'} element={
          <PrivateRoute
            authorizationStatus={localStorage.getItem('status') === AuthorizationStatus.Auth ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth}>
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
