import { useState, lazy, Suspense } from 'react';
import { useErrorBoundary } from 'preact/hooks';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import LoadingIcon from '../../icons/LoadingIcon';

const ShareModal = lazy(() => import('./ShareModal'));

const StyledButton = styled(Button)``;

const StyledLoadingIcon = styled(LoadingIcon)`
  font-size: 1.5em;
  margin: -0.5em -0.5em -0.5em 0.5em;
  color: ${({ theme }) => theme.colors.accent};
`;

const ShareButton = (props) => {
  const { t } = useL10n();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useErrorBoundary(() => {
    window.location.reload();
  });

  const handleShare = async () => {
    const shareData = {
      title: t('og:title'),
      text: t('og:description'),
      url: window.location.href,
    };

    if (typeof navigator.share !== 'undefined') {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
      }
    }

    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <Suspense
          fallback={
            <StyledButton {...props} onClick={handleShare}>
              {t('shareModal.triggerButtonText')} <StyledLoadingIcon />
            </StyledButton>
          }
        >
          <StyledButton {...props} onClick={handleShare}>
            {t('shareModal.triggerButtonText')}
          </StyledButton>
          <ShareModal isOpen onClose={() => setIsModalOpen(false)} />
        </Suspense>
      ) : (
        <StyledButton {...props} onClick={handleShare}>
          {t('shareModal.triggerButtonText')}
        </StyledButton>
      )}
    </>
  );
};

export default ShareButton;
