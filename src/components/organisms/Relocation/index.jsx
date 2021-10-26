import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const Relocation = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.relocation}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('relocation.title')}</Section.Title>
    </Section>
  );
};

export default Relocation;
