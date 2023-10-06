import { useDispatch, useSelector } from 'react-redux';
import { delContact, showContacts } from 'redux/globalSlice';
import { nanoid } from 'nanoid';
import {
  ContactsList,
  ContactsListItem,
  ButtonDel,
} from './ContactList.styled';

export const ContactList = () => {
  const filterContacts = useSelector(showContacts);
  const dispatch = useDispatch();
  const removeContact = name => dispatch(delContact(name));

  return (
    <ContactsList>
      {filterContacts.map(({ name, number }) => (
        <ContactsListItem key={nanoid()}>
          {name}: {number}
          <ButtonDel type="button" onClick={() => removeContact(name)}>
            Delete
          </ButtonDel>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};
