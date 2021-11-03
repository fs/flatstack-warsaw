import styled from 'styled-components';
import { useL10n } from '../L10nContext';

const RequiredText = styled.p`
  color: ${({ theme }) => theme.colors.paleText};
`;

const AsteriskWrapper = styled.span`
  color: red;
`;

const RequiredFormText = () => {
  const { t } = useL10n();
  return (
    <RequiredText>{t('form.requiredText', { AsteriskWrapper })}</RequiredText>
  );
};

export default RequiredFormText;
