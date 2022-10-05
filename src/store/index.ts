import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'src/services/api';
import { reducer as contactsReducer } from 'src/store/contacts/reducer';
import { reducer as authReducer } from './auth/reducer';

export const api = createAPI();

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
        }),
});
