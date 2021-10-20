import styled from 'styled-components';
import Section from '../../molecules/Section';
import ButtonLink, { variants as buttonVariants } from '../../atoms/ButtonLink';
import { useL10n } from '../../L10nContext';
import titleBgPath from './title-bg.jpeg';

const StyledSection = styled(Section)`
  margin: 5em 0;
`;

const Title = styled.h1`
  // depend on viewport width, but not bigger than 5em and not smaller than 3em
  font-size: max(min(5em, 15vw), 3em);
  font-weight: 900;
  background: url('${titleBgPath}') no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.3em;
  line-height: 1;
`;

const Subtitle = styled.span`
  // depend on viewport width, but not bigger than 2em and not smaller than 1.25em
  font-size: max(min(2em, 6vw), 1.25em);
  margin: 2rem 0;
`;

const SubtitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 2em 0 3em;
  max-width: 35em;
`;

const Technology = styled.div`
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 0.7em;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
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
    <StyledSection>
      <Title>Fullstack Developer</Title>
      <Subtitle>
        {t('hero.subtitle', { Highlight: SubtitleHighlight })}
      </Subtitle>
      <TechnologiesWrapper>
        {technologies.map((technology) => (
          <Technology>{technology}</Technology>
        ))}
      </TechnologiesWrapper>
      <ActionsWrapper>
        <ButtonLink href="#">{t('hero.actions.apply')}</ButtonLink>
        <ButtonLink href="#" variant={buttonVariants.BORDERED}>
          {t('hero.actions.recommend')}
        </ButtonLink>
        <ButtonLink href="#" variant={buttonVariants.BORDERED}>
          {t('hero.actions.share')}
        </ButtonLink>
      </ActionsWrapper>
    </StyledSection>
  );
};

export default Hero;
