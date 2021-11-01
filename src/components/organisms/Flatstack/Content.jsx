import styled from 'styled-components';
import React from 'react';
import Section from '../../molecules/Section';
import FlatstackJpgPhotoPath from './flatstack.jpg';
import FlatstackWebpPhotoPath from './flatstack.webp';
import FlatstackAvifPhotoPath from './flatstack.avif';
import { useL10n } from '../../L10nContext';

const InnerWrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
`;
const Picture = styled.picture``;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1em;
  display: block;
`;
const Description = styled.p``;
const Row = styled.div`
  max-width: 30em;
`;

const Content = () => {
  const { t } = useL10n();
  return (
    <InnerWrapper>
      <Row>
        <Section.Title>{t('flatstack.title')}</Section.Title>
        <Description>{t('flatstack.description')}</Description>
      </Row>
      <Picture>
        <source srcSet={FlatstackAvifPhotoPath} type="image/avif" />
        <source srcSet={FlatstackWebpPhotoPath} type="image/webp" />
        <Image
          src={FlatstackJpgPhotoPath}
          width="256"
          height="310"
          alt={t('relocation.imageAlt')}
        />
      </Picture>
    </InnerWrapper>
  );
};

export default Content;
