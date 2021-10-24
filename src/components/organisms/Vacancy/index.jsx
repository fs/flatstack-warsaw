import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'vacancy-section';

const Vacancy = () => {
  const { t } = useL10n();
  return (
    <Section id={ID} dangerouslySetInnerHTML={{ __html: '' }}>
      <Section.Title>{t('vacancy.aboutFlatstack')}</Section.Title>
    </Section>
  );
};

export default Vacancy;
