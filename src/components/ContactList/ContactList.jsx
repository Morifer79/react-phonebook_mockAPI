import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchAllContacts } from 'redux/operations';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';
import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts && (
        <ContactsList>
          {filterContacts.map(({ id, name, number }) => (
            <ContactsListItem key={nanoid()}>
              {name}: {number}
              <ButtonDel
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ButtonDel>
            </ContactsListItem>
          ))}
        </ContactsList>
      )}
    </>
  );
};
