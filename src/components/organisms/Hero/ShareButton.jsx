import { useState, lazy, Suspense } from 'react';
import { useL10n } from '../../L10nContext';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import ShareModalContent from './ShareModalContent';

const Modal = lazy(() => import('../../molecules/Modal'));

const ShareButton = ({ children }) => {
  const { t } = useL10n();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button variant={buttonVariants.BORDERED} onClick={handleShare}>
        {children}
      </Button>

      {isModalOpen ? (
        <Suspense fallback={null}>
          <Modal
            isOpen
            onClose={() => setIsModalOpen(false)}
            title={t('shareModal.title')}
          >
            <ShareModalContent />
          </Modal>
        </Suspense>
      ) : null}
    </>
  );
};

export default ShareButton;
