import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import alinaAvif128 from './alina_128.avif';
import alinaWebp128 from './alina_128.webp';
import alinaJpg128 from './alina_128.jpg';
import alinaAvif64 from './alina_64.avif';
import alinaWebp64 from './alina_64.webp';
import alinaJpg64 from './alina_64.jpg';
import dmitryAvif128 from './dmitry_128.avif';
import dmitryWebp128 from './dmitry_128.webp';
import dmitryJpg128 from './dmitry_128.jpg';
import dmitryAvif64 from './dmitry_64.avif';
import dmitryWebp64 from './dmitry_64.webp';
import dmitryJpg64 from './dmitry_64.jpg';
import arkadiiAvif128 from './arkadey_128.avif';
import arkadiiWebp128 from './arkadey_128.webp';
import arkadiiJpg128 from './arkadey_128.jpg';
import arkadiiAvif64 from './arkadey_64.avif';
import arkadiiWebp64 from './arkadey_64.webp';
import arkadiiJpg64 from './arkadey_64.jpg';
import askarAvif128 from './askar_128.avif';
import askarWebp128 from './askar_128.webp';
import askarJpg128 from './askar_128.jpg';
import askarAvif64 from './askar_64.avif';
import askarWebp64 from './askar_64.webp';
import askarJpg64 from './askar_64.jpg';

const alinaPhotos = {
  avifSmall: alinaAvif64,
  avifBig: alinaAvif128,
  webpSmall: alinaWebp64,
  webpBig: alinaWebp128,
  jpgSmall: alinaJpg64,
  jpgBig: alinaJpg128,
};

const dmitryPhotos = {
  avifSmall: dmitryAvif64,
  avifBig: dmitryAvif128,
  webpSmall: dmitryWebp64,
  webpBig: dmitryWebp128,
  jpgSmall: dmitryJpg64,
  jpgBig: dmitryJpg128,
};

const arkadiiPhotos = {
  avifSmall: arkadiiAvif64,
  avifBig: arkadiiAvif128,
  webpSmall: arkadiiWebp64,
  webpBig: arkadiiWebp128,
  jpgSmall: arkadiiJpg64,
  jpgBig: arkadiiJpg128,
};

const askarPhotos = {
  avifSmall: askarAvif64,
  avifBig: askarAvif128,
  webpSmall: askarWebp64,
  webpBig: askarWebp128,
  jpgSmall: askarJpg64,
  jpgBig: askarJpg128,
};

const CardsWrapper = styled.div`
  columns: 25em auto;
  column-gap: 2em;
`;

const FeedbackCard =
  typeof window === 'undefined'
    ? require('./FeedbackCard').default
    : () => null;

const Content = () => {
  const { t } = useL10n();
  return (
    <CardsWrapper>
      <FeedbackCard items={t('feedbacks.items.dmitry')} photos={dmitryPhotos} />
      <FeedbackCard items={t('feedbacks.items.alina')} photos={alinaPhotos} />
      <FeedbackCard
        items={t('feedbacks.items.arkadii')}
        photos={arkadiiPhotos}
      />
      <FeedbackCard items={t('feedbacks.items.askar')} photos={askarPhotos} />
    </CardsWrapper>
  );
};

export default Content;
