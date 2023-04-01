import { Modal, NumberInput, Button } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const UpdateListLimitModal = ({
	setUpdateListLimitModalOpened,
	updateListLimit,
	oldListLimit,
	updateListLimitId,
	setUpdateListLimitId,
	setOldListLimit,
}) => {
	const { t } = useTranslation();
	const descriptionInfo = (
		<p style={{ fontSize: '1rem' }}>{t('updateListLimitModalInfo')}</p>
	);
	const [newLimit, setNewLimit] = useState(oldListLimit);
	// const isValid = newLimit >= minValue || newLimit === 0
	const changeLimitInfo = <p>{t('updateListLimitModalTitle')}</p>;

	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
	};

	const handleChangeLimit = (value) => {
		if (/^[0-9\b]+$/.test(value)) {
			setNewLimit(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateListLimit(updateListLimitId, newLimit);
		setUpdateListLimitId(null);
		setOldListLimit(null);
		setUpdateListLimitModalOpened(false);
	};

	return (
		<Modal
			opened
			onClose={() => setUpdateListLimitModalOpened(false)}
			title={changeLimitInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setUpdateListLimitModalOpened(false)}
		>
			<form>
				<NumberInput
					value={newLimit}
					label={t('updateListLimitModalInputLabel')}
					placeholder={t('updateListLimitModalPlaceholder')}
					radius='md'
					size='md'
					description={descriptionInfo}
					min={0}
					formatter={(value) =>
						value === '0' ? t('noLimit') : value.replace(/\D/g, '')
					}
					onChange={(e) => handleChangeLimit(e)}
				/>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					mt='lg'
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					// disabled={!isValid}
				>
					{t('updateListLimitModalBtn')}
				</Button>
			</form>
		</Modal>
	);
};

export default UpdateListLimitModal;
