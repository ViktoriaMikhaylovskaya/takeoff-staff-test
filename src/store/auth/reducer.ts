import { createReducer, createAction } from '@reduxjs/toolkit';
import { IAuthData } from 'src/types/user';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const actions = {
    requireAuthorization: createAction<AuthorizationStatus>('user/requireAuthorization'),
    setUser: createAction<IAuthData>('user/data'),
};

export type State = {
    authorizationStatus: AuthorizationStatus,
    user: IAuthData,
};

const initialState: State = {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: {} as IAuthData,
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
