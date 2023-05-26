import { createSlice } from '@reduxjs/toolkit';
import {
    hendleDeleteContact,
    hendleFetchContact,
    hendleFetchContactById,
} from './operations';

const initialState = {
    contactsArray: [],
    isLoading: false,
    error: null,
    contact: {},
    currentImg: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setCurrentImg: {
            reducer(state, action) {
                state.currentImg = action.payload;
            },
        },
    },
    extraReducers: builder => {
        builder
            .addCase(hendleFetchContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleFetchContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contactsArray = action.payload;
                state.currentImg = '';
                state.contact = {};
            })
            .addCase(hendleFetchContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleFetchContactById.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleFetchContactById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contact = action.payload;
            })
            .addCase(hendleFetchContactById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(hendleDeleteContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(hendleDeleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const i = state.contactsArray.findIndex(
                    contact => contact.id === action.payload.id
                );
                state.contactsArray.splice(i, 1);
            })
            .addCase(hendleDeleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const contactsReducer = contactsSlice.reducer;

export const { setCurrentImg } = contactsSlice.actions;
