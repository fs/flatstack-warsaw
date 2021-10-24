import { useRef, useState, lazy, Suspense } from 'react';
import { useErrorBoundary } from 'preact/hooks';
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
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';
import WhatsappIcon from '../../icons/WhatsappIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import LoadingIcon from '../../icons/LoadingIcon';
import AppleWatchWebpPath from './apple-watch.webp';
import AppleWatchPngPath from './apple-watch.png';
import HrDecoratedPhoto from './HrDecoratedPhoto';
import SuccessModalContent from './SuccessModalContent';

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

const StyledLoadingIcon = styled(LoadingIcon)`
  font-size: 1.5em;
  margin: -0.5em -1.5em -0.5em 0.5em;
`;

const ErrorMessage = styled.p`
  color: red;
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

const HrPicture = styled(HrDecoratedPhoto)`
  position: absolute;
  top: -4.5em;
  left: 50%;
  transform: translateX(-50%);
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

const formStatuses = {
  IDLE: 'IDLE',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

const Modal = lazy(() => import('../../molecules/Modal'));

const Join = () => {
  const { t } = useL10n();
  const { shouldBeHydrated, handleClick } = useOnClickHydrate();
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(formStatuses.IDLE);
  useErrorBoundary(() => setFormStatus(formStatuses.FAIL));

  const handleSubmit = async (event) => {
    if (
      typeof window.FormData === 'undefined' ||
      typeof window.fetch === 'undefined' ||
      typeof window.URLSearchParams === 'undefined'
    ) {
      return;
    }

    event.preventDefault();

    setFormStatus(formStatuses.SUBMITTING);

    const formData = new FormData(formRef.current);

    try {
      const { ok } = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setFormStatus(ok ? formStatuses.SUCCESS : formStatuses.FAIL);
    } catch (err) {
      setFormStatus(formStatuses.FAIL);
    }
  };

  const handleClose = () => {
    setFormStatus(formStatuses.IDLE);
  };

  return (
    <Section grey id={ID}>
      <Section.Title>{t('join.title')}</Section.Title>
      <InnerWrapper>
        <Form
          name="join"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input type="hidden" name="form-name" value="join" />
          <StyledInput
            type="text"
            name="name"
            label={t('join.form.name')}
            id="join-form-input-name"
            required
          />
          <StyledInput
            type="email"
            name="email"
            label={t('join.form.email')}
            id="join-form-input-email"
            required
          />
          <StyledInput
            type="text"
            name="link"
            label={t('join.form.link')}
            id="join-form-input-link"
          />
          {formStatus !== formStatuses.SUCCESS ? (
            <StyledButton
              type="submit"
              fullWidth
              variant={buttonVariants.ACCENT}
              data-id="orig"
            >
              {t('join.form.submit')}
              {formStatus === formStatuses.SUBMITTING ? (
                <StyledLoadingIcon />
              ) : null}
            </StyledButton>
          ) : (
            <Suspense
              fallback={
                <StyledButton
                  type="submit"
                  fullWidth
                  variant={buttonVariants.ACCENT}
                  data-id="fallback"
                >
                  {t('join.form.submit')}
                  <StyledLoadingIcon />
                </StyledButton>
              }
            >
              <StyledButton
                type="submit"
                fullWidth
                variant={buttonVariants.ACCENT}
                data-id="loaded"
              >
                {t('join.form.submit')}
              </StyledButton>
              <Modal
                isOpen
                onClose={handleClose}
                title={t('join.form.successTitle')}
                centered
              >
                <SuccessModalContent handleClose={handleClose} />
              </Modal>
            </Suspense>
          )}

          {formStatus === formStatuses.FAIL ? (
            <ErrorMessage>{t('join.form.error')}</ErrorMessage>
          ) : null}
          <Agreement>
            {t('join.form.agreement', {
              LinkComponent: Link,
              url: '/privacy-policy.pdf',
            })}
          </Agreement>
        </Form>
        <RightCol>
          <HrCard dangerouslySetInnerHTML={{ __html: '' }}>
            <HrPicture />
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
