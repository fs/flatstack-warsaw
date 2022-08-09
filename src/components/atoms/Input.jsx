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

  font-size: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.7em;
`;

const RequiredMark = styled.span`
  color: red;
`;

const Input = ({
  textarea,
  name,
  label,
  className,
  inputClassName,
  id,
  required,
  ...rest
}) => {
  return (
    <InputWrapper className={className}>
      {label ? (
        <Label for={id}>
          {label} {required ? <RequiredMark>*</RequiredMark> : null}
        </Label>
      ) : null}
      <HtmlInput
        className={inputClassName}
        as={textarea ? 'textarea' : 'input'}
        name={name}
        id={id}
        required={required}
        {...rest}
      />
    </InputWrapper>
  );
};

export default Input;
