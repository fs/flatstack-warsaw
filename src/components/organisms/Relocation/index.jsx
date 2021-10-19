import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

export const ID = 'relocation-section';

const Relocation = () => {
  const { t } = useL10n();
  return (
    <Section id={ID}>
      <h1>{t('relocation.title')}</h1>
    </Section>
  );
};

export default Relocation;
