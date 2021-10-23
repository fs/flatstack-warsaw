import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  margin-bottom: 0.5em;
`;

const HtmlInput = styled.input`
  width: 100%;
  padding: 0.8em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1em;
`;

const Input = ({ name, label, className, id, ...rest }) => {
  return (
    <InputWrapper className={className}>
      <Label for={id}>{label}</Label>
      <HtmlInput name={name} id={id} {...rest} />
    </InputWrapper>
  );
};

export default Input;
