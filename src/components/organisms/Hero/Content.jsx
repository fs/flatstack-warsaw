import styled from 'styled-components';
import titleBgJpgPath from './title-bg.jpg?inline';
import titleBgWebpPath from './title-bg.webp?inline';
import { useL10n } from '../../L10nContext';

const Title = styled.h1`
  /* depend on viewport width, but not bigger than 5em and not smaller than 3em */
  margin: 0 0 0.3em;

  font-weight: 900;
  font-size: clamp(3em, 15vw, 5em);
  line-height: 1;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: brightness(70%);

  body.no-webp & {
    background-image: url('${titleBgJpgPath}');
    /* stylelint-disable-next-line */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  body.webp & {
    background-image: url('${titleBgWebpPath}');
    /* stylelint-disable-next-line */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.span`
  /* depend on viewport width, but not bigger than 2em and not smaller than 1.25em */
  font-size: clamp(1.25em, 6vw, 2em);
`;

const SubtitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 36em;
  margin: 1.75em -0.25em -0.25em;

  & > * {
    margin: 0.25em;
  }
`;

const Technology = styled.div`
  padding: 0.3em 0.8em;

  font-size: 1em;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.7em;
`;

const technologies = [
  'Ruby on Rails',
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
      <Subtitle>{t('hero.salary')}</Subtitle>
      <TechnologiesWrapper>
        {technologies.map((technology) => (
          <Technology>{technology}</Technology>
        ))}
      </TechnologiesWrapper>
    </>
  );
};

export default Content;
