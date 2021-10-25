import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';
import Section from '../../molecules/Section';
import ShareButton from '../../molecules/ShareButton';
import ButtonLink, {
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import { ID as JOIN_SECTION_ID } from '../Join';
import titleBgJpgPath from './title-bg.jpg?inline';
import titleBgWebpPath from './title-bg.webp?inline';

const StyledSection = styled(Section)`
  margin: 5em 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  // depend on viewport width, but not bigger than 5em and not smaller than 3em
  font-size: max(min(5em, 15vw), 3em);
  font-weight: 900;
  margin: 0 0 0.3em;
  line-height: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(70%);

  body.no-webp & {
    background-image: url('${titleBgJpgPath}');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  body.webp & {
    background-image: url('${titleBgWebpPath}');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.span`
  // depend on viewport width, but not bigger than 2em and not smaller than 1.25em
  font-size: max(min(2em, 6vw), 1.25em);
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
  const { handleClick, shouldBeHydrated } = useOnClickHydrate();

  return (
    <StyledSection
      dangerouslySetInnerHTML={shouldBeHydrated ? undefined : { __html: '' }}
      onClick={handleClick}
    >
      <InnerWrapper>
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
          <ButtonLink
            href={`#${JOIN_SECTION_ID}`}
            variant={buttonLinkVariants.ACCENT}
          >
            {t('hero.actions.apply')}
          </ButtonLink>
          <ButtonLink href="#" variant={buttonLinkVariants.BORDERED}>
            {t('hero.actions.recommend')}
          </ButtonLink>
          <ShareButton>{t('hero.actions.share')}</ShareButton>
        </ActionsWrapper>
      </InnerWrapper>
    </StyledSection>
  );
};

export default Hero;
