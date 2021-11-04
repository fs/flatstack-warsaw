import { forwardRef } from 'react';
import styled from 'styled-components';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import Link from '../../atoms/Link';
import Input from '../../atoms/Input';
import LoadingIcon from '../../icons/LoadingIcon';
import { useL10n } from '../../L10nContext';
import RequiredFormText from '../../atoms/RequiredFormText';

const Agreement = styled.p`
  color: ${({ theme }) => theme.colors.paleText};
`;

const Fieldset = styled.fieldset`
  display: block;
  margin: 0 0 2em 0;
  padding: 0;
  border: none;
`;

const FieldsetLegend = styled.legend`
  display: block;
  margin: 0 0 1em 0;
  padding: 0;
  font-weight: bold;
  font-size: 1em;
`;

const StyledInput = styled(Input)`
  margin: 0 0 1em 0;
`;

const StyledTextarea = styled(({ className, ...restProps }) => (
  <StyledInput {...restProps} inputClassName={className} />
)).attrs(() => ({
  textarea: true,
}))`
  min-height: 5em;
  resize: vertical;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const StyledLoadingIcon = styled(LoadingIcon)`
  font-size: 1.5em;
  margin: -0.5em -1.5em -0.5em 0.5em;
`;

export const statuses = {
  IDLE: 'IDLE',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

const RecommendForm = forwardRef(({ onSubmit, status }, ref) => {
  const { t } = useL10n();

  return (
    <form method="POST" onSubmit={onSubmit} ref={ref}>
      <input type="hidden" name="form-name" value="recommend" />
      <Fieldset>
        <FieldsetLegend>{t('recommendModal.form.aboutYou')}</FieldsetLegend>
        <StyledInput
          type="text"
          name="your_name"
          label={t('recommendModal.form.yourName')}
          id="recommend-form-your-name-input"
          required
        />
        <StyledInput
          type="email"
          name="your_email"
          label={t('recommendModal.form.yourEmail')}
          id="recommend-form-your-email-input"
          required
        />
        <StyledInput
          type="tel"
          name="your_phone"
          label={t('recommendModal.form.yourPhone')}
          id="recommend-form-your-phone-input"
        />
      </Fieldset>
      <Fieldset>
        <FieldsetLegend>
          {t('recommendModal.form.aboutRecommendee')}
        </FieldsetLegend>
        <StyledInput
          type="text"
          name="recommendee_name"
          label={t('recommendModal.form.recommendeeName')}
          id="recommend-form-recommendee-name-input"
          required
        />
        <StyledInput
          type="email"
          name="recommendee_email"
          label={t('recommendModal.form.recommendeeEmail')}
          id="recommend-form-recommendee-email-input"
          required
        />
        <StyledInput
          type="tel"
          name="recommendee_phone"
          label={t('recommendModal.form.recommendeePhone')}
          id="recommend-form-recommendee-phone-input"
        />

        <StyledTextarea
          name="comment"
          label={t('recommendModal.form.recommendeeComment')}
          id="recommend-form-recommendee-comment-textarea"
        />
      </Fieldset>
      <Button type="submit" variant={buttonVariants.ACCENT} fullWidth>
        {t('recommendModal.form.submit')}
        {status === statuses.SUBMITTING ? <StyledLoadingIcon /> : null}
      </Button>
      {status === statuses.FAIL ? (
        <ErrorMessage>{t('recommendModal.form.error')}</ErrorMessage>
      ) : null}
      <Agreement>
        {t('join.form.agreement', {
          LinkComponent: Link,
          url: '/privacy-policy.pdf',
        })}
      </Agreement>
      <RequiredFormText />
    </form>
  );
});

export default RecommendForm;
