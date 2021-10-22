import { useState } from 'react';
import { useL10n } from '../../L10nContext';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import Modal from '../../molecules/Modal';
import ShareModalContent from './ShareModalContent';

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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('shareModal.title')}
      >
        <ShareModalContent />
      </Modal>
    </>
  );
};

export default ShareButton;
