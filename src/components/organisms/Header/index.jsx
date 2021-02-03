import styled from 'styled-components';
import Container from '../../atoms/Container';
import { useL10n } from '../../L10nContext';
import LangSwitcher from './LangSwitcher';
import Link from '../../atoms/Link';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  ${Link} {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLangSwitcher = styled(LangSwitcher)`
  padding: 1em 0;
`;

const Logo = styled.img``;

const Header = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Logo src="/logo.svg" alt={t('logoAlt')} width="139" height="138" />
          <StyledLangSwitcher />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
