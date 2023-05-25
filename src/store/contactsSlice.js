import { createSlice } from '@reduxjs/toolkit';
import { hendleFetchContact } from './operations';

const initialState = {
    contactsArray: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchProcess: state => {
            state.isLoading = true;
        },
        fetchProcessSuccess: {
            reducer(state, action) {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            },
            prepare: payload => ({ payload }),
        },
        fetchProcessReject: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare({ name, surname, number, email, photo }) {
                return {
                    payload: {
                        name,
                        surname,
                        number,
                        email,
                        photo,
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const i = state.contacts.findIndex(
                    contact => contact.id === action.payload
                );
                state.contacts.splice(i, 1);
            },
        },
    },
    extraReducers: builder => {
        builder.addCase(hendleFetchContact.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(hendleFetchContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contactsArray = action.payload;
        });
        builder.addCase(hendleFetchContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const contactsReducer = contactsSlice.reducer;

export const {
    fetchProcess,
    fetchProcessSuccess,
    fetchProcessReject,
    addContact,
    deleteContact,
} = contactsSlice.actions;
