import styled from 'styled-components';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';
import Input from '../../atoms/Input';
import Button, {
  variants as buttonVariants,
  paddingVariants as buttonPaddingVariants,
} from '../../atoms/Button';
import Link from '../../atoms/Link';
import Card from '../../atoms/Card';
import HrPhotoJpgPath from './hr-photo.jpg';
import HrPhotoWebpPath from './hr-photo.webp';
import HrPhotoAvifPath from './hr-photo.avif';
import AppleWatchWebpPath from './apple-watch.webp';
import AppleWatchPngPath from './apple-watch.png';
import TelegramIcon from '../../icons/TelegramIcon';
import WhatsappIcon from '../../icons/WhatsappIcon';
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10em 15%;
  margin-top: 3em;
`;

const Form = styled.form`
  flex: 3 0 22em;
  max-width: 100%;
`;

const StyledInput = styled(Input)`
  margin: 0 0 1em 0;
`;

const StyledButton = styled(Button)`
  margin: 1.5rem 0;
`;

const Agreement = styled.span`
  color: ${({ theme }) => theme.colors.paleText};
`;

const RightCol = styled.div`
  flex: 1 0 16em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 100%;
`;

const HrCard = styled(Card)`
  padding-top: 4.5em;
  position: relative;
`;

const Picture = styled.picture`
  display: block;
  position: absolute;
  top: -4.5em;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    display: block;
    content: '';
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: -0.5em;
    left: -1em;
  }

  &::after {
    display: block;
    content: '';
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    bottom: -1em;
    right: 0;
  }
`;

const Image = styled.img`
  display: block;
  border-radius: 50%;
`;

const HrCardText = styled.p``;

const ContactLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5em 0;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 0.5em 0;
`;

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  font-size: 1.5em;
`;

const RecommendationCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;

const RecommendationCardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RecommendationDescription = styled.p``;

export const ID = 'join-section';

const Join = () => {
  const { t } = useL10n();
  const { shouldBeHydrated, handleClick } = useOnClickHydrate();

  return (
    <Section grey id={ID}>
      <Section.Title>{t('join.title')}</Section.Title>
      <InnerWrapper>
        <Form>
          <StyledInput
            type="text"
            name="name"
            label={t('join.form.name')}
            id="join-form-input-name"
          />
          <StyledInput
            type="email"
            name="email"
            label={t('join.form.email')}
            id="join-form-input-email"
          />
          <StyledInput
            type="text"
            name="link"
            label={t('join.form.link')}
            id="join-form-input-link"
          />
          <StyledButton type="submit" fullWidth variant={buttonVariants.ACCENT}>
            {t('join.form.submit')}
          </StyledButton>
          <Agreement>
            {t('join.form.agreement', {
              LinkComponent: Link,
              url: '/privacy-policy.pdf',
            })}
          </Agreement>
        </Form>
        <RightCol>
          <HrCard dangerouslySetInnerHTML={{ __html: '' }}>
            <Picture>
              <source srcSet={HrPhotoWebpPath} type="image/webp" />
              <source srcSet={HrPhotoAvifPath} type="image/avif" />
              <Image
                src={HrPhotoJpgPath}
                alt={t('join.hrPhotoAlt')}
                width="128"
                height="128"
              />
            </Picture>
            <HrCardText>{t('join.hrMessage')}</HrCardText>
            <ContactLinksWrapper>
              <ContactLink href="tel:000-000-000" noHoverEffect>
                <StyledIcon icon={TelegramIcon} /> {t('join.contacts.telegram')}
              </ContactLink>
              <ContactLink href="tel:000-000-000" noHoverEffect>
                <StyledIcon icon={WhatsappIcon} /> {t('join.contacts.whatsapp')}
              </ContactLink>
            </ContactLinksWrapper>
          </HrCard>
          <RecommendationCard
            dangerouslySetInnerHTML={
              shouldBeHydrated ? undefined : { __html: '' }
            }
            onClick={handleClick}
          >
            <RecommendationCardDescriptionWrapper>
              <RecommendationDescription>
                {t('join.recommendationDescription')}
              </RecommendationDescription>
              <Button
                variant={buttonVariants.ACCENT_TEXT}
                negativeMargins
                paddingVariant={buttonPaddingVariants.SYMMETRIC}
              >
                {t('join.recommendationLinkText')}
              </Button>
            </RecommendationCardDescriptionWrapper>
            <picture>
              <source srcSet={AppleWatchWebpPath} type="image/webp" />
              <img
                src={AppleWatchPngPath}
                alt={t('join.appleWatchImageAlt')}
                width="80"
                height="94"
              />
            </picture>
          </RecommendationCard>
        </RightCol>
      </InnerWrapper>
    </Section>
  );
};

export default Join;
