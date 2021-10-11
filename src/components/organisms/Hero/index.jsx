import styled, { keyframes } from 'styled-components';
import { useL10n } from '../../L10nContext';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';

const Wrapper = styled.section`
  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

const LineWrapper = styled.span``;

const cursorAnimation = keyframes`
  from, to { opacity: 1; }
  50% { opacity: 0; }
`;

const Title = styled.h1`
  line-height: 1.5;
  font-family: monospace;

  ${LineWrapper} {
    display: inline-block;

    &::before {
      content: '//';
      display: inline-block;
      margin-right: 0.5em;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -0.3em;
    }
  }

  &::after {
    content: '\\A|';
    white-space: pre;
    animation: ${cursorAnimation} 1.5s step-end infinite;
  }
`;

const Hero = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <Title>{t('hero.title', { LineWrapper })}</Title>

        <Button big inline as="a" href="#join">
          {t('hero.joinButton')}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Hero;
