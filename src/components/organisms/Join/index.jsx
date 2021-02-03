import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const Join = () => {
  const { t } = useL10n();
  return (
    <Section id="join" title={t('join.title')}>
      Here will be form ???
    </Section>
  );
};

export default Join;
