import styled from 'styled-components';
import Section from '../../molecules/Section';
import ButtonLink, { variants as buttonVariants } from '../../atoms/ButtonLink';
import { useL10n } from '../../L10nContext';
import titleBgPath from './title-bg.jpeg';

const Title = styled.h1`
  font-size: 6em;
  font-weight: 900;
  background: url('${titleBgPath}') no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 5rem 0 2rem;
`;

const Description = styled.span`
  font-size: 2rem;
  margin: 2rem 0;
`;

const DescriptionHighlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -0.5rem;
`;

const Technology = styled.div`
  font-size: 0.5em;
  padding: 0.5em 1em;
  border-radius: 0.7em;
  margin: 0.5em 0.5em;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const technologies = [
  'RubyOnRail',
  'PostgreSQL',
  'React.js',
  'REST',
  'TDD',
  'Docker',
  'AWS',
  'Terraform',
  'TypeScript',
  'Serverless',
];

const Hero = () => {
  const { t } = useL10n();

  return (
    <Section>
      <Title>Fullstack Developer</Title>
      <Description>
        {t('heroDescription.where')}
        <DescriptionHighlight>
          {' '}
          &#123;{t('heroDescription.condition')}&#125;
        </DescriptionHighlight>
        <TechnologiesWrapper>
          {technologies.map((technology) => (
            <Technology>{technology}</Technology>
          ))}
        </TechnologiesWrapper>
      </Description>
      <ActionsWrapper>
        <ButtonLink href="#">{t('heroActions.apply')}</ButtonLink>
        <ButtonLink href="#" variant={buttonVariants.TEXT}>
          {t('heroActions.recommend')}
        </ButtonLink>
        <ButtonLink href="#" variant={buttonVariants.TEXT}>
          {t('heroActions.share')}
        </ButtonLink>
      </ActionsWrapper>
    </Section>
  );
};

export default Hero;
