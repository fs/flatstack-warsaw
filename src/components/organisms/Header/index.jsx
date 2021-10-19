import styled from 'styled-components';
import Container from '../../atoms/Container';
import { useL10n } from '../../L10nContext';
import LangSwitcher from './LangSwitcher';
import Link from '../../atoms/Link';

const Wrapper = styled.header``;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const StyledLangSwitcher = styled(LangSwitcher)`
  padding: 1em 0;
`;

const Logo = styled.img`
  margin: 1.5rem 0;
`;

const Menu = styled.nav`
  margin: 1.5rem 0;
`;

const Ul = styled.ul`
  list-style-type: none;
  font-size: 1.25em;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Delimiter = styled.div`
  height: 2em;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1.5em;
`;

const Header = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Logo src="/logo.svg" alt={t('logoAlt')} width="120" height="56" />
          <RightCol>
            <Menu>
              <Ul>
                <li>
                  <Link href="#" noUnderline>
                    {t('menu.vacancy')}
                  </Link>
                </li>
                <li>
                  <Link href="#" noUnderline>
                    {t('menu.relocations')}
                  </Link>
                </li>
                <li>
                  <Link href="#" noUnderline>
                    {t('menu.feedbacks')}
                  </Link>
                </li>
                <li>
                  <Link href="#" noUnderline>
                    {t('menu.warsaw')}
                  </Link>
                </li>
              </Ul>
            </Menu>
            <Delimiter />
            <StyledLangSwitcher />
          </RightCol>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
