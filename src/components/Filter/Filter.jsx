import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, getFilters } from 'redux/globalSlice';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { SearchInput, SearchWrapper } from './Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = () => {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const changedFilter = e => {
    dispatch(applyFilter(e.target.value));
  };

  return (
    <SearchWrapper>
      <Label>
        Find contacts by name:
        <SearchInput
          type="text"
          value={filter}
          onChange={changedFilter}
          id={nanoid()}
        />
      </Label>
    </SearchWrapper>
  );
};
