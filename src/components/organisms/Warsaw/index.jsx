import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'warsaw-section';

const Warsaw = () => {
  const { t } = useL10n();
  return (
    <Section id={ID}>
      <h1>{t('warsaw.title')}</h1>
    </Section>
  );
};

export default Warsaw;
