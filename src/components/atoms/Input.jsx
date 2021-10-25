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
  padding: 0.6em 0.7em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.7em;
  font-size: 1rem;
`;

const Input = ({ textarea, name, label, className, id, ...rest }) => {
  return (
    <InputWrapper className={className}>
      {label ? <Label for={id}>{label}</Label> : null}
      <HtmlInput
        as={textarea ? 'textarea' : 'input'}
        name={name}
        id={id}
        {...rest}
      />
    </InputWrapper>
  );
};

export default Input;
