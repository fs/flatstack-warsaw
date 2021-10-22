import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import ButtonLink, { variants as buttonVariants } from '../../atoms/ButtonLink';
import Button from '../../atoms/Button';
import { useL10n } from '../../L10nContext';

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;

  & > * {
    flex: 1 0 15em;
  }
`;

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

const ShareModalContent = () => {
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
    <>
      <LinksWrapper>
        <ButtonLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
        >
          {t('shareModal.shareViaFacebook')}
        </ButtonLink>
        <ButtonLink
          href={`https://vk.com/share.php?url=${encodeURIComponent(selfLink)}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
        >
          {t('shareModal.shareViaVk')}
        </ButtonLink>
        <ButtonLink
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
        >
          {t('shareModal.shareViaTwitter')}
        </ButtonLink>
        <ButtonLink
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            selfLink,
          )}`}
          target="_blank"
          variant={buttonVariants.BORDERED}
        >
          {t('shareModal.shareViaLinkedIn')}
        </ButtonLink>
      </LinksWrapper>

      <CopyRow>
        <CopyInput type="text" value={selfLink} />
        <CopyButton onClick={handleCopy}>{copyButtonText}</CopyButton>
      </CopyRow>
    </>
  );
};

export default ShareModalContent;
