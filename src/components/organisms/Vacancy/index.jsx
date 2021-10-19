import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'vacancy-section';

const Vacancy = () => {
  const { t } = useL10n();
  return (
    <Section id={ID}>
      <h1>{t('vacancy.aboutFlatstack')}</h1>
    </Section>
  );
};

export default Vacancy;
