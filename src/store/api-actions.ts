import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppDispatch, State } from 'src/types/state';
import { IAuthData } from 'src/types/user';
import { IContact, INewContact } from 'src/types/contacts';
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
            const { data } = await api.get<IContact[]>('/contacts');
            dispatch(contactsActions.fetchContacts(data));
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const addContactAction = createAsyncThunk<void, INewContact, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (newContact, { dispatch, extra: api }) => {
        try {
            dispatch(contactsActions.setDataLoadedStatus(true));
            await api.post<IContact>('/contacts', newContact).then((response) => {
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
            await api.delete<IContact>(`/contacts/${id}`).then((response) => {
                dispatch(fetchContactsAction())
                return response;
            });
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);

export const editContactAction = createAsyncThunk<void, IContact, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'data/fetchContacts',
    async (editedContact, { dispatch, extra: api }) => {
        try {

            dispatch(contactsActions.setDataLoadedStatus(true));
            await api.patch<IContact>(`/contacts/${editedContact.id}`, editedContact).then((response) => {
                dispatch(fetchContactsAction())
                return response;
            });
            dispatch(contactsActions.setDataLoadedStatus(false));
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
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
            const { data } = await api.get<IAuthData>('/user');
            dispatch(actions.setUser(data));

            if (data.email) {
                dispatch(actions.requireAuthorization(AuthorizationStatus.Auth));
            }
        } catch (error) {
            dispatch(contactsActions.fail('Error'));
        }
    },
);


export const loginAction = createAsyncThunk<void, IAuthData, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}>(
    'user/login',
    async ({ email, password }, { dispatch, extra: api }) => {
        await api.post<IAuthData>('/user', { email, password });
        localStorage.setItem('status', AuthorizationStatus.Auth);
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
        await api.post<IAuthData>('/user', {});
        localStorage.setItem('status', AuthorizationStatus.NoAuth)
        dispatch(actions.requireAuthorization(AuthorizationStatus.NoAuth));
    },
);