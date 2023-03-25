import { Modal, TextInput, Button, ColorInput, Box, Text, Group, ColorSwatch, CheckIcon, rem } from '@mantine/core'
import { useState } from 'react'
import { CirclePicker } from 'react-color'

const RenameCardModal = ({
	renameCardModalOpened,
	setRenameCardModalOpened,
	updateCardTitle,
	oldCardTitle,
	setOldCardTitle,
	setRenameCardId,
	setRenameCardListId,
	renameCardId,
	renameCardListId,
	setCardColor,
	cardColor,
}) => {
	const selectedColumnInfo = <p>Zmień nazwę zadania</p>
	const [actualInputValue, setActualInputValue] = useState('')
	const [choosenColor, setChoosenColor] = useState(cardColor)
	const [checked, setChecked] = useState(true)
	const isValid = oldCardTitle.trim().length > 0
	const colors = ['#8DC44F', '#FFC718', '#FF9E0F', '#DA483B']
	const inputDynamicProps = {
		label: 'Nowa nazwa zadania:',
		size: 'md',
		...(!isValid && { error: 'Sprawdź poprawność wpisanej nazwy.' }),
	}
	const buttonDynamicProps = {
		type: 'submit',
		variant: 'default',
		color: 'gray',
		radius: 'md',
		size: 'sm',
		...(!isValid && { disabled: true }),
	}

	const handleSubmit = e => {
		e.preventDefault()
		updateCardTitle(oldCardTitle, renameCardListId, renameCardId, choosenColor)
		setRenameCardModalOpened(false)
		setOldCardTitle('')
		setRenameCardId('')
		setRenameCardListId('')
		setCardColor('')
	}

	return (
		<Modal
			opened={renameCardModalOpened}
			onClose={() => setRenameCardModalOpened(false)}
			title={selectedColumnInfo}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setRenameCardModalOpened(false)}>
			<form>
				<TextInput
					{...inputDynamicProps}
					value={oldCardTitle}
					onChange={e => {
						setOldCardTitle(e.target.value)
						setActualInputValue(e.target.value)
					}}
				/>
				{/* <Box maw={200} mx='auto'> */}
				{/* <ColorInput
						withPicker={false}
						value={color}
						onChange={setColor}
						format='hex'
						size='md'
						disallowInput={true}
						fixOnBlur={true}
						withEyeDropper={false}
						swatchesPerRow={4}
						swatches={['#6dc773', '#FDFD96', '#ffa500', '#FC2E20']}
					/> */}

				{/* <Text align='center' mt={5}>
						Wybrany kolor: {color}
					</Text> */}
				{/* </Box> */}

				{/* {console.log(`${color}`)} */}
				<Text mt={10}>Wybierz kolor:</Text>
				<Box mt={3} style={{ display: 'flex', justifyContent: 'flex-start' }}>
					{colors.map((color, index) => (
						<button
							key={index}
							type='button'
							className='color-btn'
							style={{ backgroundColor: color, 
								width: '30px', 
								height: '30px', 
								margin: '0 5px', 
								border: `${choosenColor === color ? '2px solid white' : 'none'}`, 
								borderRadius: '50%' }}
							onClick={() => {
								setChoosenColor(color)
							}}></button>
					)
					)}
				</Box>
				<Button
					{...buttonDynamicProps}
					onClick={handleSubmit}
					style={{ display: 'block', margin: '20px auto 0', fontWeight: 'normal' }}>
					Zmień nazwę
				</Button>
			</form>
		</Modal>
	)
}

export default RenameCardModal
