import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import config from '../../../config';
import Link, { underlineTypes } from '../../atoms/Link';
import Container from '../../atoms/Container';
import LogoSvg from './LogoSvg';
import LangSwitcher from './LangSwitcher';

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem -1em -1em;
`;

const StyledLogo = styled(LogoSvg)`
  flex: none;
  margin: 1em;
`;

const Menu = styled.nav``;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  font-size: 1.25em;

  list-style-type: none;
`;

const Li = styled.li`
  margin-right: 0.8em;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Delimiter = styled.div`
  flex: none;
  align-self: center;
  width: 1px;
  height: 2em;
  margin: 0 1.5em;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0.5em;
  padding: 0.5em;
  overflow: auto;
`;

const Content = () => {
  const { t } = useL10n();

  return (
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
  );
};

export default Content;
