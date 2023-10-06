import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import { Form, Field } from 'formik';

export const FormWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing(5)};
  padding: 40px 30px;

  height: auto;
  width: 40%;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 12px 12px 20px ${p => p.theme.colors.shadow},
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;

export const InputStyled = styled(Field)`
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
  padding: ${p => p.theme.spacing(5)};

  width: 100%;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  background: none;
  box-shadow: inset 6px 6px 8px ${p => p.theme.colors.shadow},
    inset -7px -7px 14px 0px rgba(84, 56, 197, 0.2);
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  outline: none;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonAdd = styled.button`
  padding: 10px 50px;
  margin-top: ${p => p.theme.spacing(10)};

  cursor: pointer;
  font-size: 20px;
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
    color: ${p => p.theme.colors.lawngreen};
    background-color: ${p => p.theme.colors.hoverbtn};
  }

  :active {
    box-shadow: inset 7px 6px 9px 0px ${p => p.theme.colors.shadow},
      inset -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
    color: rgba(255, 255, 255, 0.24);
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.yellow};
  font-size: 16px;
`;
