import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const JobDescription = () => {
  const { t } = useL10n();
  return (
    <Section title={t('jobDescription.title')}>
      Some content
    </Section>
  );
};

export default JobDescription;
