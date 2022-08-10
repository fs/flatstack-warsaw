import styled from 'styled-components';
import Card, { variants as cardVariants } from '../../atoms/Card';

const Photo = styled.picture`
  display: block;

  flex: none;

  width: 4em;
  height: 4em;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 1em;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: -0.5em;

  & > * {
    margin: 0.5em;
  }
`;

const PersonDescription = styled.div``;

const Title = styled.h3`
  margin: 0 0 0.5em;

  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

const SubTitle = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.paleText};
`;

const Wrapper = styled(Card)``;

const Feedback = styled.p``;

const FeedbackCard = ({ title, teamTime, feedback, photoAlt, photos }) => {
  return (
    <Wrapper variant={cardVariants.FILL_ACCENT_PALE}>
      <Person>
        <Photo>
          <source
            srcSet={`${photos.avifSmall} 64w, ${photos.avifBig} 128w`}
            type="image/avif"
          />
          <source
            srcSet={`${photos.webpSmall} 64w, ${photos.webpBig} 128w`}
            type="image/webp"
          />
          <Image
            srcSet={`${photos.jpgSmall} 64w, ${photos.jpgBig} 128w`}
            src={photos.jpgSmall}
            alt={photoAlt}
            width="64"
            height="64"
            loading="lazy"
          />
        </Photo>
        <PersonDescription>
          <Title>{title}</Title>
          <SubTitle>{teamTime}</SubTitle>
        </PersonDescription>
      </Person>
      <Feedback>{feedback}</Feedback>
    </Wrapper>
  );
};

export default FeedbackCard;
