import { createReducer, createAction } from '@reduxjs/toolkit';
import { IContact } from 'src/types/contacts';

export const actions = {
    fetchContacts: createAction<IContact[]>('contacts/fetch'),
    fail: createAction<string>('contacts/fetchContactsFail'),
    setDataLoadedStatus: createAction<boolean>('contacts/setDataLoadedStatus'),
};

export type State = {
    contactList: IContact[],
    isLoading: boolean,
    error: string | null,
};

const initialState: State = {
    contactList: [],
    isLoading: false,
    error: '',
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.fetchContacts, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.contactList = payload;
        })
        .addCase(actions.fail, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(actions.setDataLoadedStatus, (state, { payload }) => {
            state.isLoading = payload;
        });
});

export default actions;
