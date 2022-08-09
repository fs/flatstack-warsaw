import styled from 'styled-components';
import Card, { variants as cardVariants } from '../../atoms/Card';

const Photo = styled.div`
  flex: none;

  width: 4em;
  height: 4em;

  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 50%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

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

const FeedbackCardWrapper = styled(Card)`
  break-inside: avoid;

  max-width: 100%;

  margin-bottom: 2em;

  page-break-inside: avoid;
`;

const Feedback = styled.p``;

const FeedbackCard = ({ items, photos }) => {
  return (
    <FeedbackCardWrapper variant={cardVariants.FILL_ACCENT_PALE}>
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
            alt={items.photoAlt}
            width="568"
            height="454"
            loading="lazy"
          />
        </Photo>
        <PersonDescription>
          <Title>{items.title}</Title>
          <SubTitle>{items.teamTime}</SubTitle>
        </PersonDescription>
      </Person>
      <Feedback>{items.feedback}</Feedback>
    </FeedbackCardWrapper>
  );
};

export default FeedbackCard;
