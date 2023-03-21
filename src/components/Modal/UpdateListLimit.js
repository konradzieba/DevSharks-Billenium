import { Modal, NumberInput, Button } from '@mantine/core'
import { useState } from 'react'

const descriptionInfo = <p style={{ fontSize: '1rem' }}>Wprowadzając limit 0 ustawiasz brak limitu.</p>

const UpdateListLimitModal = ({
	setUpdateListLimitModalOpened,
	updateListLimit,
	oldListLimit,
	updateListLimitId,
	setUpdateListLimitId,
	setOldListLimit,
	minValue,
}) => {
	const [newLimit, setNewLimit] = useState(oldListLimit)
	// const isValid = newLimit >= minValue || newLimit === 0
	const changeLimitInfo = <p>Zmień limit kolumny</p>
	const inputDynamicProps = {
		label: 'Zmiana limitu kolumny:',
		size: 'md',
		// ...(!isValid && {
		// 	error: 'Limit musi być większy bądź równy aktualnemu lub 0 (∞)',
		// }),
	}
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		// ...(!isValid && { disabled: true }),
	}

	const handleChangeLimit = value => {
		if (/^[0-9\b]+$/.test(value)) {
			setNewLimit(value)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		updateListLimit(updateListLimitId, newLimit)
		setUpdateListLimitId(null)
		setOldListLimit(null)
		setUpdateListLimitModalOpened(false)
	}

	return (
		<Modal
			opened
			onClose={() => setUpdateListLimitModalOpened(false)}
			title={changeLimitInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setUpdateListLimitModalOpened(false)}>
			<form>
				<NumberInput
					value={newLimit}
					placeholder='Wprowadź nowy limit...'
					label='Wprowadź nowy limit'
					radius='md'
					size='md'
					description={descriptionInfo}
					min={0}
					formatter={value => (value === '0' ? 'Bez limitu' : value.replace(/\D/g, ''))}
					onChange={e => handleChangeLimit(e)}
					{...inputDynamicProps}
				/>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					mt='lg'
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}
					// disabled={!isValid}
				>
					Zmień limit
				</Button>
			</form>
		</Modal>
	)
}

export default UpdateListLimitModal
