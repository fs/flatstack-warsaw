import styled from 'styled-components';
import Container from './Container';
import { useL10n } from './L10nContext';

const Wrapper = styled.header``;

const Logo = styled.img``;

const Header = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <Logo src="/logo.svg" alt={t('logoAlt')} width="139" height="138" />
      </Container>
    </Wrapper>
  );
};

export default Header;
