import config from '../../../config';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Feedbacks = () => {
  return (
    <Section
      id={config.sectionIds.feedbacks}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Content />
    </Section>
  );
};

export default Feedbacks;
