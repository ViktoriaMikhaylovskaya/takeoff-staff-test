import { createReducer, createAction } from '@reduxjs/toolkit';
import { Contact } from '../../types/contacts';

export const actions = {
    fetchContacts: createAction<Contact[]>('contacts/fetch'),
    fail: createAction<string>('contacts/fetchContactsFail'),
    success: createAction<Contact[]>('contacts/fetchContactsSuccess'),
    setDataLoadedStatus: createAction<boolean>('contacts/setDataLoadedStatus'),
    addNewContact: createAction<Contact[]>('contacts/addNewContact'),
};

export type State = {
    contactList: Contact[] | null,
    isLoading: boolean,
    error: string | null,
};

const initialState: State = {
    contactList: null,
    isLoading: false,
    error: null,
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.fetchContacts, (state, { payload }) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(actions.fail, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(actions.success, (state, { payload }) => {
            state.isLoading = false;
            state.contactList = payload;
        })
        .addCase(actions.setDataLoadedStatus, (state, { payload }) => {
            state.isLoading = payload;
        });
});

export default actions;
