import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const AboutTeam = () => {
  const { t } = useL10n();
  return <Section title={t('aboutTeam.title')}>Some content</Section>;
};

export default AboutTeam;
