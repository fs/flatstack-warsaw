import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import Card from '../../atoms/Card';
import VacancyDescriptionCard from './VacancyDescriptionCard';
import ButtonLink, {
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import { ID as JOIN_SECTION_ID } from '../Join';

export const ID = 'vacancy-section';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3em 15%;
  margin-top: 3em;
  justify-content: center;
`;

const VacancyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2em;
  border-radius: 1em;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`;

const VacancyDescription = styled.span`
  font-weight: 600;
  font-size: 2em;
  max-width: 40rem;
`;

const VacancySubdescription = styled.span`
  max-width: 40rem;
`;

const Vacancy = () => {
  const { t } = useL10n();
  return (
    <Section id={ID} dangerouslySetInnerHTML={{ __html: '' }}>
      <Section.Title>{t('vacancy.aboutFlatstack')}</Section.Title>
      <InnerWrapper>
        <VacancyCard>
          <VacancyDescription>
            {t('vacancy.vacancyDescription')}
          </VacancyDescription>
          <VacancySubdescription>
            {t('vacancy.productSphere')}
          </VacancySubdescription>
        </VacancyCard>
        <VacancyDescriptionCard
          title={t('vacancy.role.title')}
          description={t('vacancy.role.description')}
        />
        <VacancyDescriptionCard
          title={t('vacancy.workOrganisation.title')}
          description={t('vacancy.workOrganisation.description')}
        />
        <VacancyDescriptionCard
          title={t('vacancy.requirements.title')}
          description={t('vacancy.requirements.description')}
        />
        <VacancyDescriptionCard
          title={t('vacancy.benefits.title')}
          description={t('vacancy.benefits.description')}
        />
        <ButtonLink
          href={`#${JOIN_SECTION_ID}`}
          variant={buttonLinkVariants.ACCENT}
        >
          {t('hero.actions.apply')}
        </ButtonLink>
      </InnerWrapper>
    </Section>
  );
};

export default Vacancy;
