import styled from 'styled-components';
import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import Card from '../../atoms/Card';

export const ID = 'feedbacks-section';

const CardWrapper = styled.div`
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
`;

const Person = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
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

const Feedbacks = () => {
  const { t } = useL10n();
  return (
    <Section
      id={config.sectionIds.feedbacks}
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <Section.Title>{t('feedbacks.title')}</Section.Title>
      <CardWrapper>
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
      </CardWrapper>
    </Section>
  );
};

export default Feedbacks;
