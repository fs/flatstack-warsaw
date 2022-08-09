import styled from 'styled-components';
import Card, { variants as cardVariants } from '../../atoms/Card';

const Photo = styled.div`
  height: 4em;
  width: 4em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: none;
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
  align-items: center;
  flex-wrap: wrap;
  margin: -0.5em;

  & > * {
    margin: 0.5em;
  }
`;

const PersonDescription = styled.div``;

const Title = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5em;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.paleText};
  margin: 0;
`;

const FeedbackCardWrapper = styled(Card)`
  break-inside: avoid;
  page-break-inside: avoid;
  max-width: 100%;
  margin-bottom: 2em;
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
