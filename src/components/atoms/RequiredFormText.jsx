import styled from 'styled-components';
import { useL10n } from '../L10nContext';

const RequiredText = styled.p`
  color: ${({ theme }) => theme.colors.paleText};
`;

const StarSymbol = styled.span`
  color: red;
`;

const Text = styled.span``;

const RequiredFormText = () => {
  const { t } = useL10n();
  return (
    <RequiredText>
      <StarSymbol>*</StarSymbol>
      <Text>{t('form.requiredText')}</Text>
    </RequiredText>
  );
};

export default RequiredFormText;
