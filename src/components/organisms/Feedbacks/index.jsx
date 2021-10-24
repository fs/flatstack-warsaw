import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'feedbacks-section';

const Feedbacks = () => {
  const { t } = useL10n();
  return (
    <Section id={ID} dangerouslySetInnerHTML={{ __html: '' }}>
      <Section.Title>{t('feedbacks.title')}</Section.Title>
    </Section>
  );
};

export default Feedbacks;
