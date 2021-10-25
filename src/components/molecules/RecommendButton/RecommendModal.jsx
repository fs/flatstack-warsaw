import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Modal from '../Modal';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import Link from '../../atoms/Link';
import Input from '../../atoms/Input';

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

const RecommendModal = ({ isOpen, onClose }) => {
  const { t } = useL10n();

  const handleSubmit = () => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('recommendModal.title')}>
      <form method="POST" onSubmit={handleSubmit}>
        <Fieldset>
          <FieldsetLegend>{t('recommendModal.form.aboutYou')}</FieldsetLegend>
          <StyledInput
            type="text"
            name="name"
            label={t('recommendModal.form.yourName')}
            id="recommend-form-your-name-input"
            required
          />
          <StyledInput
            type="email"
            name="email"
            label={t('recommendModal.form.yourEmail')}
            id="recommend-form-your-email-input"
            required
          />
          <StyledInput
            type="tel"
            name="phone"
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
            name="name"
            label={t('recommendModal.form.recommendeeName')}
            id="recommend-form-recommendee-name-input"
            required
          />
          <StyledInput
            type="email"
            name="email"
            label={t('recommendModal.form.recommendeeEmail')}
            id="recommend-form-recommendee-email-input"
            required
          />
          <StyledInput
            type="tel"
            name="phone"
            label={t('recommendModal.form.recommendeePhone')}
            id="recommend-form-recommendee-phone-input"
          />

          <StyledInput
            textarea
            name="comment"
            label={t('recommendModal.form.recommendeeComment')}
            id="recommend-form-recommendee-comment-textarea"
          />
        </Fieldset>
        <Button type="submit" variant={buttonVariants.ACCENT} fullWidth>
          {t('recommendModal.form.submit')}
        </Button>
        <Agreement>
          {t('join.form.agreement', {
            LinkComponent: Link,
            url: '/privacy-policy.pdf',
          })}
        </Agreement>
      </form>
    </Modal>
  );
};

export default RecommendModal;
