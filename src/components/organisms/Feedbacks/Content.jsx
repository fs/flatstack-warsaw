import styled from 'styled-components';
import Card from '../../atoms/Card';
import { useL10n } from '../../L10nContext';

const CardsWrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FeedbackCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.accentPale};
  border: none;
  width: min(100px, 25%, 50vh, 30ch);
  flex: none;
  flex: 1 1 49%;
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

const PersonDescription = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
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
        <FeedbackCard>
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
