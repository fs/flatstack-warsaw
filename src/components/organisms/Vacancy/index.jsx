import Section from '../../molecules/Section';

export const ID = 'vacancy-section';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Vacancy = () => {
  return (
    <Section id={ID} dangerouslySetInnerHTML={{ __html: '' }}>
      <Content />
    </Section>
  );
};

export default Vacancy;
