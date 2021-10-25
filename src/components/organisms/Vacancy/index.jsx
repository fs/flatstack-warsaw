import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import Card, { types as cardTypes } from '../../atoms/Card';
import ButtonLink, {
  paddingVariants as buttonPaddingVariants,
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import { ID as JOIN_SECTION_ID } from '../Join';

export const ID = 'vacancy-section';

const StyledCard = styled(Card)`
  margin-bottom: 2em;
`;

const VacancyTitle = styled.h2`
  font-weight: bold;
  font-size: clamp(1.5em, 5vw, 2em);
  max-width: 40rem;
  margin: 0 0 1em 0;
`;

const VacancyDescription = styled.p`
  max-width: 40rem;
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

const CardTitle = styled.h3`
  font-weight: bold;
  font-size: clamp(1.5em, 5vw, 2em);
  margin: 0;
  flex: 0 0 15rem;
  max-width: 100%;
`;

const List = styled.ul`
  flex: 1 1 20em;
  max-width: 100%;
  margin: 0;
  padding: 0 0 0 2em;
  list-style: disc;
`;

const ListItem = styled.li`
  margin: 0 0 0.5em 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BLOCKS = ['role', 'workOrganisation', 'requirements', 'benefits'];

const Vacancy = () => {
  const { t } = useL10n();
  return (
    <Section id={ID} dangerouslySetInnerHTML={{ __html: '' }}>
      <StyledCard type={cardTypes.FILL}>
        <VacancyTitle>{t('vacancy.vacancyDescription')}</VacancyTitle>
        <VacancyDescription>{t('vacancy.aboutProduct')}</VacancyDescription>
      </StyledCard>
      {BLOCKS.map((block) => (
        <StyledCard>
          <CardContent>
            <CardTitle>{t(`vacancy.${block}.title`)}</CardTitle>
            <List>
              {t(`vacancy.${block}.items`).map((item) => (
                <ListItem>{item}</ListItem>
              ))}
            </List>
          </CardContent>
        </StyledCard>
      ))}
      <ButtonWrapper>
        <ButtonLink
          href={`#${JOIN_SECTION_ID}`}
          variant={buttonLinkVariants.ACCENT}
          paddingVariant={buttonPaddingVariants.BIG}
        >
          {t('vacancy.apply')}
        </ButtonLink>
      </ButtonWrapper>
    </Section>
  );
};

export default Vacancy;
