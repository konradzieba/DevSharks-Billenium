import { Checkbox } from '@mantine/core'
import { IconX, IconCheck } from '@tabler/icons-react'
import { useState } from 'react'

const Subtask = ({ task, toggleSubtaskStatus, removeSubtask, cardId, listId }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px' }}>
			<Checkbox
				size={16}
				color='green'
				checked={task.isDone}
				onChange={e => toggleSubtaskStatus(listId, cardId, task.id)}
			/>
			{task.isDone ? (<span style={{color: 'gray'}}>{task.name}</span>) : (<span>{task.name}</span>)}
			{isOpen ? (
				<>
					<IconX cursor={'pointer'} size={16} onClick={() => setIsOpen(false)} 
					style={{marginTop: '3px'}}/>
					<IconCheck cursor={'pointer'} size={16} onClick={() => removeSubtask(listId, cardId, task.id)} 
					style={{marginLeft: '-4px', marginTop: '3px'}}/>
				</>
			) : (
				<IconX cursor={'pointer'} size={16} onClick={() => setIsOpen(true)} 
				style={{marginTop: '3px'}}/>
			)}
		</div>
	)
}

export default Subtask
