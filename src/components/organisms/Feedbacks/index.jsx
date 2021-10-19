import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'feedbacks-section';

const Feedbacks = () => {
  const { t } = useL10n();
  return (
    <Section id={ID}>
      <h1>{t('feedbacks.title')}</h1>
    </Section>
  );
};

export default Feedbacks;
