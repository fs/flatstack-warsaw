import styled from 'styled-components';
import Container from '../../atoms/Container';
import { useL10n } from '../../L10nContext';
import LogoSvg from './LogoSvg';
import LangSwitcher from './LangSwitcher';
import Link, { underlineTypes } from '../../atoms/Link';
import { ID as VACANCY_SECTION_ID } from '../Vacancy';
import { ID as RELOCATION_SECTION_ID } from '../Relocation';
import { ID as FEEDBACKS_SECTION_ID } from '../Feedbacks';
import { ID as WARSAW_SECTION_ID } from '../Warsaw';

const Wrapper = styled.header``;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

const StyledLogo = styled(LogoSvg)`
  flex: none;
`;

const Menu = styled.nav``;

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
  flex: none;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 1.5em;
  overflow: auto;
  margin: 0 -0.5em;
  padding: 0 0.5em;
`;

const Header = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <StyledLogo width="120" height="56" />
          <RightCol>
            <Menu>
              <Ul>
                <li>
                  <Link
                    href={`#${VACANCY_SECTION_ID}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.vacancy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${RELOCATION_SECTION_ID}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.relocation')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${FEEDBACKS_SECTION_ID}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.feedbacks')}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`#${WARSAW_SECTION_ID}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.warsaw')}
                  </Link>
                </li>
              </Ul>
            </Menu>
            <Delimiter />
            <LangSwitcher />
          </RightCol>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
