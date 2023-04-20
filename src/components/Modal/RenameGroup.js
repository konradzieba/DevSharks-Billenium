import { Modal, TextInput, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
const RenameGroupModal = ({
	setRenameGroupModalOpened,
	groups,
	renameGroup,
	oldGroupName,
	setOldGroupName,
	renameGroupId,
	setRenameGroupId,
	renameGroupListId,
}) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('renameGroupModalTitle')}</p>;
	const isUnique = groups.every(
		group => group.id === renameGroupId.id || group.name.toLowerCase() !== oldGroupName.toLowerCase()
	);
	const isValid = oldGroupName.trim().length > 0;

	const inputDynamicProps = {
		label: t('renameGroupModalInputLabel'),
		size: 'md',
		...(!isUnique && { error: t('renameGroupModalExistsError') }),
	};
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isUnique && { disabled: true }),
		...(!isValid && { disabled: true }),
	};

	const handleSubmit = e => {
		e.preventDefault();
		renameGroup(renameGroupListId, renameGroupId, oldGroupName);
		setOldGroupName('');
		setRenameGroupId(null);
		setRenameGroupModalOpened(false);
	};

	return (
		<Modal
			className='modal-font'
			opened
			onClose={() => setRenameGroupModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameGroupModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldGroupName}
					onChange={e => {
						setOldGroupName(e.target.value);
					}}
				/>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}>
					{t('renameGroupModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default RenameGroupModal;
