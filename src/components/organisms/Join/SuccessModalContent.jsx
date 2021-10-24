import styled from 'styled-components';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import { useL10n } from '../../L10nContext';
import HrDecoratedPhoto from './HrDecoratedPhoto';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledHrPhoto = styled(HrDecoratedPhoto)`
  align-self: center;
`;

const Description = styled.p`
  margin: 2em 0;
`;

const SuccessModalContent = ({ handleClose }) => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <StyledHrPhoto />
      <Description>{t('join.form.successDescription')}</Description>
      <Button variant={buttonVariants.ACCENT} fullWidth onClick={handleClose}>
        {t('join.form.successOkButton')}
      </Button>
    </Wrapper>
  );
};

export default SuccessModalContent;
