import styled from 'styled-components';
import Container from '../../atoms/Container';
import { useL10n } from '../../L10nContext';
import LogoSvg from './LogoSvg';
import LangSwitcher from './LangSwitcher';
import Link, { underlineTypes } from '../../atoms/Link';
import config from '../../../config';

const Wrapper = styled.header``;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.5rem -1em -1em;
`;

const StyledLogo = styled(LogoSvg)`
  flex: none;
  margin: 1em;
`;

const Menu = styled.nav``;

const Ul = styled.ul`
  list-style-type: none;
  font-size: 1.25em;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  margin-right: 0.8em;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Delimiter = styled.div`
  height: 2em;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
  flex: none;
  margin: 0 1.5em;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  overflow: auto;
  margin: 0.5em;
  padding: 0.5em;
`;

const Header = () => {
  const { t } = useL10n();

  return (
    <Wrapper dangerouslySetInnerHTML={{ __html: '' }}>
      <Container>
        <InnerWrapper>
          <StyledLogo width="120" height="56" />
          <RightCol>
            <Menu>
              <Ul>
                <Li>
                  <Link
                    href={`#${config.sectionIds.vacancy}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.vacancy')}
                  </Link>
                </Li>
                <Li>
                  <Link
                    href={`#${config.sectionIds.company}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.company')}
                  </Link>
                </Li>
                <Li>
                  <Link
                    href={`#${config.sectionIds.relocation}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.relocation')}
                  </Link>
                </Li>
                <Li>
                  <Link
                    href={`#${config.sectionIds.feedbacks}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.feedbacks')}
                  </Link>
                </Li>
                <Li>
                  <Link
                    href={`#${config.sectionIds.warsaw}`}
                    underlineType={underlineTypes.NEVER}
                  >
                    {t('menu.warsaw')}
                  </Link>
                </Li>
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
