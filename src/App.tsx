import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import { store } from './store';
import { fetchContactsAction, getUserAction } from './store/api-actions';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import authSelectors from './store/auth/selectors';

store.dispatch(fetchContactsAction());
store.dispatch(getUserAction());

function App() {
  const { authorizationStatus } = useSelector(authSelectors);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/contacts'} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
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
