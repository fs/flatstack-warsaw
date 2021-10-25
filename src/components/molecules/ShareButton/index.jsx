import { useState, lazy, Suspense } from 'react';
import { useErrorBoundary } from 'preact/hooks';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Button from '../../atoms/Button';
import LoadingIcon from '../../icons/LoadingIcon';

const ShareModal = lazy(() => import('./ShareModal'));

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
            <Button {...props} onClick={handleShare}>
              {t('shareModal.triggerButtonText')} <StyledLoadingIcon />
            </Button>
          }
        >
          <Button {...props} onClick={handleShare}>
            {t('shareModal.triggerButtonText')}
          </Button>
          <ShareModal isOpen onClose={() => setIsModalOpen(false)} />
        </Suspense>
      ) : (
        <Button {...props} onClick={handleShare}>
          {t('shareModal.triggerButtonText')}
        </Button>
      )}
    </>
  );
};

export default ShareButton;
