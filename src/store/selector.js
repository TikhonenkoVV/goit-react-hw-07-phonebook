import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactsArray;
export const selectFilter = state => state.filter;
// export const selectIsLoading = state => state.isLoading;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contactsArray, filter) => {
        return contactsArray.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
