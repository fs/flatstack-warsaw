import config from '../../../config';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Company = () => {
  return (
    <Section
      id={config.sectionIds.company}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Content />
    </Section>
  );
};

export default Company;
