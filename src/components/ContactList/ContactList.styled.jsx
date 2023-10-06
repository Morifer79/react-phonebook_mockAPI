import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 20px 30px;

  height: auto;
  width: 40%;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 12px 12px 20px ${p => p.theme.colors.shadow},
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);
`;

export const ContactsListItem = styled.li`
  padding-right: ${p => p.theme.spacing(15)};

  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.salmon};
  }
`;

export const ButtonDel = styled.button`
  padding: 10px 30px;
  margin-top: ${p => p.theme.spacing(5)};

  cursor: pointer;
  pointer-events: auto;
  font-size: 15px;
  letter-spacing: 2px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  background: none;
  color: rgba(255, 255, 255, 0.63);
  box-shadow: 7px 6px 9px 0px ${p => p.theme.colors.shadow},
    -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
  transition: color ${p => p.theme.transition},
    background-color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.salmon};
    background-color: ${p => p.theme.colors.hoverbtn};
  }

  &:active {
    box-shadow: inset 7px 6px 9px 0px ${p => p.theme.colors.shadow},
      inset -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
    color: rgba(255, 255, 255, 0.24);
  }
`;
