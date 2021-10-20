import styled from 'styled-components';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';

const Title = styled.h2`
  font-size: 1.5em;
`;

const Form = styled.form``;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;

const Input = styled.input`
  max-width: 30em;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Join = () => {
  const { t } = useL10n();

  return (
    <Section grey>
      <Title>{t('join.title')}</Title>
      <Form>
        <InputWrapper>
          <Label for="name">{t('join.form.name')}</Label>
          <Input type="text" name="name" />
        </InputWrapper>
        <InputWrapper>
          <Label for="email">{t('join.form.email')}</Label>
          <Input type="text" name="email" />
        </InputWrapper>
        <InputWrapper>
          <Label for="link">{t('join.form.link')}</Label>
          <Input type="text" name="link" />
        </InputWrapper>
      </Form>
    </Section>
  );
};

export default Join;
