import { useState, lazy, Suspense } from 'react';
import { useErrorBoundary } from 'preact/hooks';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Button from '../../atoms/Button';
import LoadingIcon from '../../icons/LoadingIcon';

const RecommendModal = lazy(() => import('./RecommendModal'));

const StyledLoadingIcon = styled(LoadingIcon)`
  font-size: 1.5em;
  margin: -0.5em -0.5em -0.5em 0.5em;
  color: ${({ theme }) => theme.colors.accent};
`;

const RecommendButton = (props) => {
  const { t } = useL10n();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useErrorBoundary(() => {
    window.location.reload();
  });

  const handleClick = async () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <Suspense
          fallback={
            <Button {...props} onClick={handleClick}>
              {t('recommendModal.triggerButtonText')} <StyledLoadingIcon />
            </Button>
          }
        >
          <Button {...props} onClick={handleClick}>
            {t('recommendModal.triggerButtonText')}
          </Button>
          <RecommendModal isOpen onClose={() => setIsModalOpen(false)} />
        </Suspense>
      ) : (
        <Button {...props} onClick={handleClick}>
          {t('recommendModal.triggerButtonText')}
        </Button>
      )}
    </>
  );
};

export default RecommendButton;
