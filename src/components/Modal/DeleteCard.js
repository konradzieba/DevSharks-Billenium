import { Modal, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const DeleteCardModal = ({
	deleteCardModalOpened,
	setDeleteCardModalOpened,
	deleteCardId,
	setDeleteCardId,
	deleteCardListId,
	setDeleteCardListId,
	removeCard,
}) => {
	const { t } = useTranslation();
	const modalTitle = <p>{t('deleteCardModalTitle')}</p>;
	const handleDelete = () => {
		removeCard(deleteCardListId, deleteCardId);
		setDeleteCardId(null);
		setDeleteCardListId(null);
		setDeleteCardModalOpened(false);
	};
	return (
		<Modal
			className='modal-font'
			opened={deleteCardModalOpened}
			onClose={() => setDeleteCardModalOpened(false)}
			title={modalTitle}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setDeleteCardModalOpened(false)}>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
				<Button
					color='gray'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => setDeleteCardModalOpened(false)}>
					{t('deleteCardModalCancelBtn')}
				</Button>
				<Button color='red' radius='md' size='sm' onClick={handleDelete} style={{ fontWeight: 'normal' }}>
					{t('deleteCardModalDeleteBtn')}
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteCardModal;
