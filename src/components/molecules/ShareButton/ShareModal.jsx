import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import ButtonLink, {
  variants as buttonVariants,
  paddingVariants as buttonPaddingVariants,
} from '../../atoms/ButtonLink';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import VkIcon from '../../icons/VkIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import Modal from '../Modal';

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;

  & > * {
    flex: 1 0 15em;
  }
`;

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  font-size: 1.5em;
`;

const Link = styled(ButtonLink)`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const CopyRow = styled.div`
  display: flex;
  gap: 0.5em;
`;

const CopyInput = styled(Input)`
  flex: 1 1 auto;
`;

const CopyButton = styled(Button)`
  flex: none;
`;

const ShareModal = ({ isOpen, onClose }) => {
  const { t } = useL10n();
  const [copyStatus, setCopyStatus] = useState(null);

  const selfLink = window.location.href;

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
    <Modal isOpen={isOpen} onClose={onClose} title={t('shareModal.title')}>
      <LinksWrapper>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
          paddingVariant={buttonPaddingVariants.SYMMETRIC}
          centered={false}
        >
          <StyledIcon icon={FacebookIcon} />
          {t('shareModal.shareViaFacebook')}
        </Link>
        <Link
          href={`https://vk.com/share.php?url=${encodeURIComponent(selfLink)}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
          paddingVariant={buttonPaddingVariants.SYMMETRIC}
          centered={false}
        >
          <StyledIcon icon={VkIcon} />
          {t('shareModal.shareViaVk')}
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
          paddingVariant={buttonPaddingVariants.SYMMETRIC}
          centered={false}
        >
          <StyledIcon icon={TwitterIcon} />
          {t('shareModal.shareViaTwitter')}
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
          paddingVariant={buttonPaddingVariants.SYMMETRIC}
          centered={false}
        >
          <StyledIcon icon={LinkedInIcon} />
          {t('shareModal.shareViaLinkedIn')}
        </Link>
      </LinksWrapper>

      <CopyRow>
        <CopyInput type="text" value={selfLink} readOnly aria-label="URL" />
        <CopyButton onClick={handleCopy}>{copyButtonText}</CopyButton>
      </CopyRow>
    </Modal>
  );
};

export default ShareModal;
