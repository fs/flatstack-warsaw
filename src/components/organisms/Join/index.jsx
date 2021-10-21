import styled from 'styled-components';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Card from '../../atoms/Card';
import HrPhotoJpgPath from './hr-photo.jpg?inline';
import HrPhotoWebpPath from './hr-photo.webp?inline';

const JoinSection = styled.div`
  padding: 1rem 0;
  margin: -1rem 0;
`;

const JoinSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3em;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 1rem 0;
`;

const Form = styled.form`
  margin: 1rem 0;
  max-width: 30em;
`;

const StyledInput = styled(Input)`
  margin: 0.5em 0;
`;

const StyledButton = styled(Button)`
  margin: 1.5rem 0;
`;

const Agreement = styled.span`
  color: ${({ theme }) => theme.colors.paleText};
`;

const StyledCard = styled(Card)`
  padding-top: 10em;
  position: relative;
`;

const Photo = styled.div`
  width: 15em;
  height: 15em;
  border-radius: 50%;
  position: absolute;
  top: -50%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  body.no-webp & {
    background-image: url('${HrPhotoJpgPath}');
  }

  body.webp & {
    background-image: url('${HrPhotoWebpPath}');
  }

  &::before {
    display: block;
    content: '';
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: -1em;
  }

  &::after {
    display: block;
    content: '';
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    bottom: -0.1em;
    right: 5%;
  }
`;
const Message = styled.p``;

const Join = () => {
  const { t } = useL10n();

  return (
    <Section grey>
      <JoinSection>
        <Title>{t('join.title')}</Title>
        <JoinSectionWrapper>
          <Form>
            <StyledInput
              type="text"
              name="name"
              label={t('join.form.name')}
              id="join-form-input-name"
            />
            <StyledInput
              type="text"
              name="email"
              label={t('join.form.email')}
              id="join-form-input-email"
            />
            <StyledInput
              type="text"
              name="link"
              label={t('join.form.link')}
              id="join-form-input-link"
            />
            <StyledButton type="submit" fullWidth>
              {t('join.form.submit')}
            </StyledButton>
            <Agreement>
              {t('join.form.agreement')}{' '}
              <Link href="#">{t('join.form.privacyPolicy')}</Link>
            </Agreement>
          </Form>
          <StyledCard>
            <Photo />
            <Message>{t('join.managerMessage')}</Message>
          </StyledCard>
        </JoinSectionWrapper>
      </JoinSection>
    </Section>
  );
};

export default Join;
