import config from '../../../config';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Vacancy = () => {
  return (
    <Section
      id={config.sectionIds.vacancy}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Content />
    </Section>
  );
};

export default Vacancy;
