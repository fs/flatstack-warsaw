import styled from 'styled-components';
import Container from './Container';
import { useL10n } from './L10nContext';

const Wrapper = styled.section`
  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

const AboutTeam = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <h1>{t('aboutTeam.title')}</h1>
        {t('aboutTeam.text')}
      </Container>
    </Wrapper>
  );
};

export default AboutTeam;
