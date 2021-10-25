import { useL10n } from '../../L10nContext';
import Modal from '../Modal';

const RecommendModal = ({ isOpen, onClose }) => {
  const { t } = useL10n();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('recommendModal.title')}>
      asdasd
    </Modal>
  );
};

export default RecommendModal;
