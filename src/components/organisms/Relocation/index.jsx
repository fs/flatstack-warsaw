import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Relocation = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.relocation}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('relocation.title')}</Section.Title>
      <Content />
    </Section>
  );
};

export default Relocation;
