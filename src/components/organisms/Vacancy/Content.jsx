import styled from 'styled-components';
import config from '../../../config';
import { useL10n } from '../../L10nContext';
import Card, { types as cardTypes } from '../../atoms/Card';
import ButtonLink, {
  paddingVariants as buttonPaddingVariants,
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import List from '../../atoms/List';

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

const StyledList = styled(List)`
  flex: 1 1 20em;
  max-width: 100%;
  margin: 0;
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
      <StyledCard type={cardTypes.FILL}>
        <VacancyTitle>{t('vacancy.vacancyDescription')}</VacancyTitle>
        <VacancyDescription>{t('vacancy.aboutProduct')}</VacancyDescription>
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
