import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import config from '../../../config';

const Warsaw = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.warsaw}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('warsaw.title')}</Section.Title>
    </Section>
  );
};

export default Warsaw;
