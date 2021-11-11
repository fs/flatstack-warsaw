import styled from 'styled-components';
import { useL10n } from '../../L10nContext';

import Section from '../../molecules/Section';
import imagePathAvif700 from './office_700.avif';
import imagePathAvif1400 from './office_1400.avif';
import imagePathWebp700 from './office_700.webp';
import imagePathWebp1400 from './office_1400.webp';
import imagePathJpg700 from './office_700.jpg';
import imagePathJpg1400 from './office_1400.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1em;
`;

const Figure = styled.figure`
  display: block;
  flex: 1 0 20em;
  max-width: calc(100% - 2em);
  margin: 1em;
  padding: 0;
  border: none;
`;

const Figcaption = styled.figcaption`
  margin: 1em 0 0 0;
  color: ${({ theme }) => theme.colors.paleText};
  font-size: 0.9em;
  font-style: italic;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1em;
  display: block;
`;

const TextWrapper = styled.div`
  flex: 1 0 20em;
  max-width: calc(100% - 2em);
  margin: 1em;
`;

const Content = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <TextWrapper>
        <Section.Title>{t('warsaw.title')}</Section.Title>
        <p>{t('warsaw.description')}</p>
      </TextWrapper>
      <Figure>
        <Picture>
          <source
            srcSet={`${imagePathAvif700} 700w, ${imagePathAvif1400} 1400w`}
            type="image/avif"
          />
          <source
            srcSet={`${imagePathWebp700} 700w, ${imagePathWebp1400} 1400w`}
            type="image/webp"
          />
          <Image
            srcSet={`${imagePathJpg700} 700w, ${imagePathJpg1400} 1400w`}
            src={imagePathJpg1400}
            alt={t('warsaw.imageAlt')}
            width="568"
            height="454"
            loading="lazy"
          />
        </Picture>
        <Figcaption>{t('warsaw.address')}</Figcaption>
      </Figure>
    </Wrapper>
  );
};

export default Content;
