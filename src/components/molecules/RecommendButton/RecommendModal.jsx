import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Modal from '../Modal';
import Button, { variants as buttonVariants } from '../../atoms/Button';
import Link from '../../atoms/Link';
import RecommendForm, { statuses } from './RecommendForm';

const RecommendModal = ({ isOpen, onClose }) => {
  const { t } = useL10n();
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(statuses.IDLE);

  const handleSubmit = async (event) => {
    if (
      typeof window.FormData === 'undefined' ||
      typeof window.fetch === 'undefined' ||
      typeof window.URLSearchParams === 'undefined'
    ) {
      return;
    }

    event.preventDefault();

    setFormStatus(statuses.SUBMITTING);

    const formData = new FormData(formRef.current);

    try {
      const { ok } = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setFormStatus(ok ? statuses.SUCCESS : statuses.FAIL);
    } catch (err) {
      setFormStatus(statuses.FAIL);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('recommendModal.title')}>
      {formStatus !== statuses.SUCCESS ? (
        <RecommendForm
          onSubmit={handleSubmit}
          status={formStatus}
          ref={formRef}
        />
      ) : (
        <p>{t('recommendModal.form.successMessage')}</p>
      )}
    </Modal>
  );
};

export default RecommendModal;
