import styled from 'styled-components';

export const SearchWrapper = styled.div`
  text-align: center;
`;

export const SearchInput = styled.input`
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(8)};
  padding: ${p => p.theme.spacing(5)};

  font-size: 18px;
  color: ${p => p.theme.colors.white};
  outline: none;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  background: none;
  box-shadow: inset 6px 6px 8px ${p => p.theme.colors.shadow},
    inset -7px -7px 14px 0px rgba(84, 56, 197, 0.2);
`;
