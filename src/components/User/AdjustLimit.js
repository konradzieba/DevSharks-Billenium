import { NumberInput, Group, ActionIcon, rem, Text } from '@mantine/core'
import { useRef } from 'react'
import { db } from '../../firebase'
import { doc, writeBatch } from 'firebase/firestore'
import { useTranslation } from 'react-i18next';

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
		<div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
			<Text mb={5}>{t('assignUserLimitPerTask')}</Text>
			<Group spacing={5}>
				<ActionIcon size={29} color="blue" variant='filled' onClick={() => handlers.current.decrement()}>
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
					styles={{ input: { width: rem(54), textAlign: 'center', fontSize: '16px' } }}
				/>

				<ActionIcon size={29} color="blue" variant='filled' onClick={() => handlers.current.increment()}>
					+
				</ActionIcon>
			</Group>
		</div>
	)
}

export default AdjustLimit
