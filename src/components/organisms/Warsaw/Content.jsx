import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import VideoPlayIcon from './VideoPlayIcon';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 40em;
  gap: 2em;
`;

const Description = styled.p`
  margin: 0;
`;

const VideoWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;

  :after {
    display: block;
    content: '';
    padding-top: 56.25%;
  }
`;
const VideoLink = styled.a`
  display: block;
`;
const VideoImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 48px;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  padding: 0;
  display: block;
`;

const PlayIcon = styled(VideoPlayIcon)`
  fill: #212121;
  fill-opacity: 0.8;

  :focus,
  :hover {
    fill: #ff0000;
    fill-opacity: 1;
  }
`;

const Content = () => {
  const { t } = useL10n();
  return (
    <Wrapper>
      <Description>{t('warsaw.description')}</Description>
      <VideoWrapper>
        <VideoLink href="https://youtu.be/esJ_l1b_Ni0">
          <VideoImage
            src="https://i.ytimg.com/vi/esJ_l1b_Ni0/maxresdefault.jpg"
            alt={t('warsaw.videoAlt')}
          />
        </VideoLink>
        <VideoButton>
          <PlayIcon />
        </VideoButton>
      </VideoWrapper>
    </Wrapper>
  );
};

export default Content;
