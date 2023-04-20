import { Modal, TextInput, Button } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RenameListModal = ({
	renameListModalOpened,
	setRenameListModalOpened,
	updateListTitle,
	oldListTitle,
	setOldListTitle,
	renameListId,
	setRenameListId,
}) => {
	const { t } = useTranslation();
	const selectedColumnInfo = <p>{t('renameListModalTitle')}</p>;
	const [actualInputValue, setActualInputValue] = useState('');
	const isValid = oldListTitle.trim().length > 0;

	const inputDynamicProps = {
		label: t('renameListModalInputLabel'),
		size: 'md',
		...(!isValid && { error: t('renameListModalInvalidInputError') }),
	};
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isValid && { disabled: true }),
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateListTitle(oldListTitle, renameListId);
		setRenameListModalOpened(false);
		setOldListTitle('');
		setRenameListId('');
	};

	return (
		<Modal
			className='modal-font'
			opened={renameListModalOpened}
			onClose={() => setRenameListModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameListModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldListTitle}
					onChange={e => {
						setOldListTitle(e.target.value);
						setActualInputValue(e.target.value);
					}}
				/>
				<Button
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					{...buttonDynamicProps}
					onClick={handleSubmit}>
					{t('renameListModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default RenameListModal;
