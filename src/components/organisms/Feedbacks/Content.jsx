import styled from 'styled-components';
import Card, { variants as cardVariants } from '../../atoms/Card';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';

const CardsWrapper = styled.div`
  columns: 25em auto;
  column-gap: 2em;
`;

const FeedbackCard = styled(Card)`
  max-width: 100%;
  margin-bottom: 2em;

  break-inside: avoid;

  page-break-inside: avoid;
`;

const Photo = styled.div`
  flex: none;
  width: 4em;
  height: 4em;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
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

const Feedback = styled.p``;

const Content = () => {
  const { t } = useL10n();

  return (
    <>
      <Section.Title>{t('feedbacks.title')}</Section.Title>
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
    </>
  );
};

export default Content;
