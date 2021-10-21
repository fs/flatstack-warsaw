import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;

const HtmlInput = styled.input`
  max-width: 30em;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.7em;
`;

const Input = ({ name, label, ...rest }) => {
  return (
    <InputWrapper>
      <Label for={name}>{label}</Label>
      <HtmlInput name={name} {...rest} />
    </InputWrapper>
  );
};

export default Input;
