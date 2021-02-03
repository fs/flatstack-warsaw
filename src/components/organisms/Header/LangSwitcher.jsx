import styled from 'styled-components';
import Link from '../../atoms/Link';
import { useL10n } from '../../L10nContext';

const Wrapper = styled.div`
  margin: 0 -0.3em;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 0.3em;
`;

const LangSwitcher = ({ className }) => {
  const { locale } = useL10n();

  return (
    <Wrapper className={className}>
      {locale === 'en' ? (
        <StyledLink href="/ru">Русский</StyledLink>
      ) : (
        <StyledLink href="/">English</StyledLink>
      )}
    </Wrapper>
  );
};

export default LangSwitcher;
