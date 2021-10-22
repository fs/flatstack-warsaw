import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import Modal from '../../molecules/Modal';

const selfLink = typeof window === 'undefined' ? '' : window.location.href;

const CopyRow = styled.div`
  display: flex;
  gap: 0.5em;
`;

const CopyInput = styled('input')`
  flex: 1 1 auto;
`;

const CopyButton = styled(Button)`
  flex: none;
`;

const ShareButton = ({ children }) => {
  const { t } = useL10n();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState(null);

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

  const handleCopy = async () => {
    if (typeof navigator.clipboard === 'undefined') {
      return;
    }

    try {
      await navigator.clipboard.writeText(selfLink);
      setCopyStatus({ value: true });
    } catch (e) {
      setCopyStatus({ value: false });
    }
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCopyStatus(null);
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [copyStatus]);

  const copyButtonText = useMemo(() => {
    switch (copyStatus?.value) {
      case true:
        return t('shareModal.copySuccess');
      case false:
        return t('shareModal.copyFailed');
      default:
        return t('shareModal.copy');
    }
  }, [copyStatus, t]);

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
        <CopyRow>
          <CopyInput type="text" value={selfLink} />
          <CopyButton onClick={handleCopy}>{copyButtonText}</CopyButton>
        </CopyRow>
      </Modal>
    </>
  );
};

export default ShareButton;
