import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import flatstackJpgPhotoPath from './flatstack.jpg';
import flatstackWebpPhotoPath from './flatstack.webp';
import flatstackAvifPhotoPath from './flatstack.avif';
import flatstackAvif2xPhotoPath from './flatstack2x.avif';
import flatstackWarsawJpgPhotoPath from './fs-warsaw.jpg';
import flatstackWarsawWebpPhotoPath from './fs-warsaw.webp';
import flatstackWarsawAvifPhotoPath from './fs-warsaw.avif';
import flatstackNewOrleansJpgPhotoPath from './fs-no.jpg';
import flatstackNewOrleansWebpPhotoPath from './fs-no.webp';
import flatstackNewOrleansAvifPhotoPath from './fs-no.avif';
import flatstackKazanJpgPhotoPath from './fs-kazan.jpg';
import flatstackKazanWebpPhotoPath from './fs-kazan.webp';
import flatstackKazanAvifPhotoPath from './fs-kazan.avif';

const Row = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

const TextWrapper = styled.div`
  flex: 1 0 30em;
  max-width: 100%;
`;

const FlatstackPicture = styled.picture`
  display: block;
  flex: 1 1 40em;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1em;
`;

const Description = styled.p``;

const ImagesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  gap: 2em;
  margin-bottom: 2em;
`;

const OfficePicture = styled.picture`
  display: block;
`;

const Figure = styled.figure`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
`;

const Figcaption = styled.figcaption`
  margin: 1em 0 0 0;
`;

const Content = () => {
  const { t } = useL10n();
  return (
    <>
      <Row>
        <TextWrapper>
          <Section.Title>{t('company.title')}</Section.Title>
          <Description>{t('company.description')}</Description>
        </TextWrapper>
        <FlatstackPicture>
          <source
            srcSet={`${flatstackAvifPhotoPath} 800w, ${flatstackAvif2xPhotoPath} 1600w`}
            type="image/avif"
          />
          <source srcSet={flatstackWebpPhotoPath} type="image/webp" />
          <Image
            src={flatstackJpgPhotoPath}
            width="568"
            height="274"
            alt={t('company.flatstackImageAlt')}
          />
        </FlatstackPicture>
      </Row>
      <ImagesRow>
        <Figure>
          <OfficePicture>
            <source srcSet={flatstackWarsawAvifPhotoPath} type="image/avif" />
            <source srcSet={flatstackWarsawWebpPhotoPath} type="image/webp" />
            <Image
              src={flatstackWarsawJpgPhotoPath}
              width="568"
              height="274"
              alt={t('company.flatstackWarsawImageAlt')}
            />
          </OfficePicture>
          <Figcaption>{t('company.flatstackWarsawImageAlt')}</Figcaption>
        </Figure>
        <Figure>
          <OfficePicture>
            <source
              srcSet={flatstackNewOrleansAvifPhotoPath}
              type="image/avif"
            />
            <source
              srcSet={flatstackNewOrleansWebpPhotoPath}
              type="image/webp"
            />
            <Image
              src={flatstackNewOrleansJpgPhotoPath}
              width="568"
              height="274"
              alt={t('company.flatstackNewOrleansImageAlt')}
            />
          </OfficePicture>
          <Figcaption>{t('company.flatstackNewOrleansImageAlt')}</Figcaption>
        </Figure>
        <Figure>
          <OfficePicture>
            <source srcSet={flatstackKazanAvifPhotoPath} type="image/avif" />
            <source srcSet={flatstackKazanWebpPhotoPath} type="image/webp" />
            <Image
              src={flatstackKazanJpgPhotoPath}
              width="568"
              height="274"
              alt={t('company.flatstackKazanImageAlt')}
            />
          </OfficePicture>
          <Figcaption>{t('company.flatstackKazanImageAlt')}</Figcaption>
        </Figure>
      </ImagesRow>
    </>
  );
};

export default Content;
