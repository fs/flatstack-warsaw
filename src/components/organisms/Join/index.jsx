import styled from 'styled-components';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const Title = styled.h2`
  font-size: 1.5em;
`;

const Form = styled.form``;

const Join = () => {
  const { t } = useL10n();

  return (
    <Section grey>
      <Title>{t('join.title')}</Title>
      <Form>
        <Input type="text" name="name" label={t('join.form.name')} />
        <Input type="text" name="email" label={t('join.form.email')} />
        <Input type="text" name="link" label={t('join.form.link')} />
        <Button type="submit">{t('join.form.submit')}</Button>
      </Form>
    </Section>
  );
};

export default Join;
