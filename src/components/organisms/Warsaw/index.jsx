import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'warsaw-section';

const Warsaw = () => {
  const { t } = useL10n();
  return (
    <Section id={ID}>
      <Section.Title>{t('warsaw.title')}</Section.Title>
    </Section>
  );
};

export default Warsaw;
