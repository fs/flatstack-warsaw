import styled from 'styled-components';
import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Card, { variants as cardVariants } from '../../atoms/Card';
import ButtonLink, {
  paddingVariants as buttonPaddingVariants,
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import List from '../../atoms/List';

const StyledCard = styled(Card)`
  margin-bottom: 2em;
`;

const VacancyTitle = styled.h2`
  max-width: 40rem;
  margin: 0 0 1em 0;

  font-weight: bold;
  font-size: clamp(1.5em, 5vw, 2em);
`;

const VacancyDescription = styled.p`
  max-width: 40rem;
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
`;

const CardTitle = styled.h3`
  flex: 0 0 15rem;
  max-width: calc(100% - 2rem);
  margin: 1rem;

  font-weight: bold;
  font-size: clamp(1.5em, 5vw, 2em);
`;

const StyledList = styled(List)`
  flex: 1 1 20em;
  max-width: calc(100% - 2rem);
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BLOCKS = ['role', 'workOrganisation', 'requirements', 'benefits'];

const Content = () => {
  const { t } = useL10n();

  return (
    <>
      <StyledCard variant={cardVariants.FILL_PRIMARY}>
        <VacancyTitle>{t('vacancy.vacancyDescription')}</VacancyTitle>
        <VacancyDescription>
          {t('vacancy.aboutProduct.description')}
        </VacancyDescription>
        <List>
          {t(`vacancy.aboutProduct.items`).map((item) => (
            <List.Item>{item}</List.Item>
          ))}
        </List>
      </StyledCard>
      {BLOCKS.map((block) => (
        <StyledCard>
          <CardContent>
            <CardTitle>{t(`vacancy.${block}.title`)}</CardTitle>
            <StyledList>
              {t(`vacancy.${block}.items`).map((item) => (
                <List.Item>{item}</List.Item>
              ))}
            </StyledList>
          </CardContent>
        </StyledCard>
      ))}
      <ButtonWrapper>
        <ButtonLink
          href={`#${config.sectionIds.join}`}
          variant={buttonLinkVariants.ACCENT}
          paddingVariant={buttonPaddingVariants.BIG}
        >
          {t('vacancy.apply')}
        </ButtonLink>
      </ButtonWrapper>
    </>
  );
};

export default Content;
