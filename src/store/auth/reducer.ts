import { createReducer, createAction } from '@reduxjs/toolkit';
import { AuthData } from '../../types/user';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const actions = {
    requireAuthorization: createAction<AuthorizationStatus>('user/requireAuthorization'),
    setUser: createAction<AuthData>('user/data'),
};

export type State = {
    authorizationStatus: AuthorizationStatus,
    user: AuthData,
};

const initialState: State = {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: {} as AuthData,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.requireAuthorization, (state, { payload }) => {
            state.authorizationStatus = payload;
        })
        .addCase(actions.setUser, (state, { payload }) => {
            state.user = payload;
        });
});

export { reducer };
