import { Modal, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const DeleteGroupModal = ({
	deleteGroupModalOpened,
	setDeleteGroupModalOpened,
	removeGroup,
	deleteGroupListId,
	deleteGroupId,
	setDeleteGroupId,
	setDeleteGroupListId,
}) => {
	const { t } = useTranslation();
	const handleDelete = () => {
		removeGroup(deleteGroupListId, deleteGroupId);
		setDeleteGroupModalOpened(false);
		setDeleteGroupId(null);
		setDeleteGroupListId(null);
	};
	return (
		<Modal
			className='modal-font'
			opened
			onClose={() => setDeleteGroupModalOpened(false)}
			title={t('deleteGroupModalTitle')}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setDeleteGroupModalOpened(false)}>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
				<Button
					color='gray'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => setDeleteGroupModalOpened(false)}>
					{t('deleteGroupModalCancelBtn')}
				</Button>
				<Button color='red' radius='md' size='sm' onClick={handleDelete} style={{ fontWeight: 'normal' }}>
					{t('deleteGroupModalDeleteBtn')}
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteGroupModal;
