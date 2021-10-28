import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Feedbacks = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.feedbacks}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('feedbacks.title')}</Section.Title>
      <Content />
    </Section>
  );
};

export default Feedbacks;
