import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const Feedbacks = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.feedbacks}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('feedbacks.title')}</Section.Title>
    </Section>
  );
};

export default Feedbacks;
