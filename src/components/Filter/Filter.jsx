import { useDispatch } from 'react-redux';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { SearchInput, SearchWrapper } from './Filter.styled';
import { applyFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <SearchWrapper>
      <Label>
        Find contacts by name:
        <SearchInput
          type="text"
          id={nanoid()}
          onChange={e => dispatch(applyFilter(e.target.value))}
        />
      </Label>
    </SearchWrapper>
  );
};
