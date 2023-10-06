import {
  ButtonAdd,
  ErrMsg,
  FormStyled,
  FormWrapper,
  InputStyled,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, getContacts } from 'redux/globalSlice';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('The field cannot be left empty!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan'
    ),
  number: Yup.string()
    .min(9, 'enter the number in the format XXX-XX-XX')
    .max(9, 'enter the number in the format XXX-XX-XX')
    .required('The field cannot be left empty!')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (person, { resetForm }) => {
    const existName = contacts.some(
      ({ name }) => name.toLowerCase() === person.name.toLowerCase()
    );

    const existNumber = contacts.some(({ number }) => number === person.number);

    if (existName) {
      alert('A contact with this name already in contacts');
      return;
    }

    if (existNumber) {
      alert('A contact with this number already in contacts');
      return;
    }

    const completeContact = { ...person, id: nanoid() };
    dispatch(addNewContact(completeContact));
    resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <FormStyled autoComplete="off">
          <Label>
            Name
            <InputStyled type="text" name="name" required />
            <ErrMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <InputStyled type="tel" name="number" required />
            <ErrMsg name="number" component="div" />
          </Label>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </FormStyled>
      </Formik>
    </FormWrapper>
  );
};
