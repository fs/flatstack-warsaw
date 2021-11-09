import Section from '../../molecules/Section';
import config from '../../../config';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Warsaw = () => {
  return (
    <Section
      id={config.sectionIds.warsaw}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Content />
    </Section>
  );
};

export default Warsaw;
