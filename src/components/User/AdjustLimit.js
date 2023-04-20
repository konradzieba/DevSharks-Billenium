import { NumberInput, Group, ActionIcon, Text } from '@mantine/core'
import { useRef } from 'react'
import { db } from '../../firebase'
import { doc, writeBatch } from 'firebase/firestore'
import { useTranslation } from 'react-i18next';
import './styles.scss';

const AdjustLimit = ({ assignLimit, setAssignLimit }) => {
	const handlers = useRef()
  const { t } = useTranslation();
	const handleOnChange = async value => {
		setAssignLimit(value)
		const batch = writeBatch(db)
		const q = doc(db, 'assignLimit', 'qXV8NMrecqiwE0fUCQBW')
		batch.update(q, { limit: value })
		batch.commit()
	}

	return (
		<div className='adjust-limit-container'>
			<Text mb={5}>{t('assignUserLimitPerTask')}</Text>
			<Group spacing={5}>
				<ActionIcon size={30} variant='default' onClick={() => handlers.current.decrement()}>
					–
				</ActionIcon>

				<NumberInput
					hideControls
					value={assignLimit}
					onChange={value => handleOnChange(value)}
					handlersRef={handlers}
					min={1}
					step={1}
          size={30}
					className='adjust-limit-input'
					// className=''
					// styles={{ input: { width: rem(54), textAlign: 'center', fontSize: '16px' } }}
				/>

				<ActionIcon size={30} variant='default' onClick={() => handlers.current.increment()}>
					+
				</ActionIcon>
			</Group>
		</div>
	)
}

export default AdjustLimit
