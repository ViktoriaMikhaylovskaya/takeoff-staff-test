import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/user';
import { Contact, AddContact } from '../types/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions as contactsActions } from './contacts/reducer';
import { actions, AuthorizationStatus } from './auth/reducer';

export const fetchContactsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (_arg, { dispatch, extra: api }) => {
        try {
            dispatch(contactsActions.setDataLoadedStatus(true));
            const { data } = await api.get<Contact[]>('/contacts');
            dispatch(contactsActions.success(data));
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const addContactAction = createAsyncThunk<void, AddContact, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (newContact, { dispatch, extra: api }) => {
        try {
            dispatch(contactsActions.setDataLoadedStatus(true));
            await api.post<Contact>('/contacts', newContact).then((response) => {
                dispatch(fetchContactsAction())
                return response;
            });
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const deleteContactAction = createAsyncThunk<void, number, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (id, { dispatch, extra: api }) => {
        try {
            dispatch(contactsActions.setDataLoadedStatus(true));
            await api.delete<Contact>(`/contacts/${id}`).then((response) => {
                dispatch(fetchContactsAction())
                return response;
            });
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const editContactAction = createAsyncThunk<void, Contact, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (editedContact, { dispatch, extra: api }) => {
        try {
            dispatch(contactsActions.setDataLoadedStatus(true));
            await api.patch<Contact>(`/contacts/${editedContact.id}`, editedContact).then((response) => {
                dispatch(fetchContactsAction())
                return response;
            });
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
        try {
            await api.get('/login');
            dispatch(actions.requireAuthorization(AuthorizationStatus.Auth));
        } catch {
            dispatch(actions.requireAuthorization(AuthorizationStatus.NoAuth));
        }
    },
);

export const getUserAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/getUser',
    async (_arg, { dispatch, extra: api }) => {
        try {
            const { data } = await api.get<AuthData>('/user');
            dispatch(actions.setUser(data));

            if (data.name) {
                dispatch(actions.requireAuthorization(AuthorizationStatus.Auth));
            }
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);


export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'user/login',
    async ({ name, password }, { dispatch, extra: api }) => {
        await api.post<AuthData>('/user', { name, password });
        dispatch(actions.requireAuthorization(AuthorizationStatus.Auth));
        dispatch(getUserAction());
    },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'user/logout',
    async (_arg, { dispatch, extra: api }) => {
        await api.post<AuthData>('/user', {});
        dispatch(actions.requireAuthorization(AuthorizationStatus.NoAuth));
    },
);