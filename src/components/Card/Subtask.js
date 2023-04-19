import { Checkbox } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'
import { useState } from 'react'

const Subtask = ({ task, toggleSubtaskStatus, removeSubtask, cardId, listId }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='subtask-container'>
			<Checkbox
				size={16}
				color='green'
				checked={task.isDone}
				onChange={e => toggleSubtaskStatus(listId, cardId, task.id)}
			/>
			{task.isDone ? <span className='subtask-container-is-done'>{task.name}</span> : <span>{task.name}</span>}
			{isOpen ? (
				<>
					<IconX cursor={'pointer'} size={16} onClick={() => setIsOpen(false)} className='subtask-container-iconX' />
					<IconCheck
						cursor={'pointer'}
						size={16}
						onClick={() => removeSubtask(listId, cardId, task.id)}
						className='subtask-container-iconCheck'
					/>
				</>
			) : (
				<IconX cursor={'pointer'} size={16} onClick={() => setIsOpen(true)} className='subtask-container-iconX' />
			)}
		</div>
	)
}

export default Subtask
