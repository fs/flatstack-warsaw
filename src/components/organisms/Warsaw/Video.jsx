import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import PlayButton from './PlayButton';
import imageJpgPath from './image.jpg';
import imageWebpPath from './image.webp';
import imageAvifPath from './image.avif';

const Wrapper = styled.div`
  max-width: 50em;
  position: relative;
  background-color: #000;
  border-radius: 1em;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    padding-top: 56.25%;
  }
`;

const VideoIframe = styled.iframe`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoLink = styled.a`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 100%;
`;

const VideoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = () => {
  const { t } = useL10n();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Wrapper>
      {isMounted ? (
        <VideoIframe
          src="https://www.youtube.com/embed/esJ_l1b_Ni0?rel=0&showinfo=0&autoplay=1"
          allowFullScreen
        />
      ) : (
        <>
          <VideoLink
            href="https://youtu.be/esJ_l1b_Ni0"
            target="_blank"
            rel="noopener"
          >
            <Picture>
              <source srcSet={imageAvifPath} type="image/avif" />
              <source srcSet={imageWebpPath} type="image/webp" />
              <VideoImage
                src={imageJpgPath}
                width="800"
                height="450"
                alt={t('warsaw.videoAlt')}
              />
            </Picture>
          </VideoLink>
          <StyledPlayButton hoverComponent={Wrapper} />
        </>
      )}
    </Wrapper>
  );
};

export default Video;
