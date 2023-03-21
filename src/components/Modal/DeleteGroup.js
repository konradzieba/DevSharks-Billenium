import { Modal, Button } from '@mantine/core';
const DeleteGroupModal = ({
	deleteGroupModalOpened,
	setDeleteGroupModalOpened,
	removeGroup,
	deleteGroupListId,
	deleteGroupId,
	setDeleteGroupId,
	setDeleteGroupListId,
}) => {
	const handleDelete = () => {
		removeGroup(deleteGroupListId, deleteGroupId);
		setDeleteGroupModalOpened(false);
		setDeleteGroupId(null);
		setDeleteGroupListId(null);
	};
	return (
		<Modal
			opened
			onClose={() => setDeleteGroupModalOpened(false)}
			title='Usuwanie grupy'
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setDeleteGroupModalOpened(false)}
		>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
				<Button
					color='gray'
					radius='md'
					size='sm'
					style={{ fontWeight: 'normal' }}
					onClick={() => setDeleteGroupModalOpened(false)}
				>
					Anuluj
				</Button>
				<Button color='red' radius='md' size='sm' onClick={handleDelete}
				style={{ fontWeight: 'normal' }} >
					Usuń
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteGroupModal;
