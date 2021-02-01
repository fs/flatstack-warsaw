import styled from 'styled-components';
import { useL10n } from './L10nContext';
import Container from './Container';

const Wrapper = styled.section``;

const Hero = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <h1>{t('welcome')}</h1>
      </Container>
    </Wrapper>
  );
};

export default Hero;
