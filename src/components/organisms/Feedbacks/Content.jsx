import styled from 'styled-components';
import Card, { variants as cardVariants } from '../../atoms/Card';
import { useL10n } from '../../L10nContext';

const CardsWrapper = styled.div`
  columns: 25em auto;
  column-gap: 2em;
`;

const FeedbackCard = styled(Card)`
  break-inside: avoid;
  page-break-inside: avoid;
  max-width: 100%;
  margin-bottom: 2em;
`;

const Photo = styled.div`
  height: 4em;
  width: 4em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: none;
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  flex-wrap: wrap;
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

const Feedback = styled.p``;

const Content = () => {
  const { t } = useL10n();

  return (
    <CardsWrapper>
      {t('feedbacks.items').map(({ title, teamTime, feedback }) => (
        <FeedbackCard variant={cardVariants.FILL_ACCENT_PALE}>
          <Person>
            <Photo />
            <PersonDescription>
              <Title>{title}</Title>
              <SubTitle>{teamTime}</SubTitle>
            </PersonDescription>
          </Person>
          <Feedback>{feedback}</Feedback>
        </FeedbackCard>
      ))}
    </CardsWrapper>
  );
};

export default Content;
