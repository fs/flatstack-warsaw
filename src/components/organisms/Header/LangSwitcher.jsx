import styled from 'styled-components';
import Link from '../../atoms/Link';
import { useL10n } from '../../L10nContext';

const Wrapper = styled.div``;

const LangSwitcher = ({ className }) => {
  const { locale } = useL10n();

  return (
    <Wrapper className={className}>
      {locale === 'en' ? (
        <Link href="/ru">Русский</Link>
      ) : (
        <Link href="/">English</Link>
      )}
    </Wrapper>
  );
};

export default LangSwitcher;
