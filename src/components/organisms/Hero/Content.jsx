import styled from 'styled-components';
import titleBgJpgPath from './title-bg.jpg?inline';
import titleBgWebpPath from './title-bg.webp?inline';
import { useL10n } from '../../L10nContext';

const Title = styled.h1`
  // depend on viewport width, but not bigger than 5em and not smaller than 3em
  font-size: clamp(3em, 15vw, 5em);
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
  font-size: clamp(1.25em, 6vw, 2em);
`;

const SubtitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 2em;
  max-width: 35em;
`;

const Technology = styled.div`
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 0.7em;
  background-color: ${({ theme }) => theme.colors.primary};
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

const Content = () => {
  const { t } = useL10n();

  return (
    <>
      <Title>Fullstack Developer</Title>
      <Subtitle>
        {t('hero.subtitle', { Highlight: SubtitleHighlight })}
      </Subtitle>
      <TechnologiesWrapper>
        {technologies.map((technology) => (
          <Technology>{technology}</Technology>
        ))}
      </TechnologiesWrapper>
    </>
  );
};

export default Content;
