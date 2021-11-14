import config from '../../../config';
import Section from '../../molecules/Section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Relocation = () => {
  return (
    <Section
      id={config.sectionIds.relocation}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Content />
    </Section>
  );
};

export default Relocation;
