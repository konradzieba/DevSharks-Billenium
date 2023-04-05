import { Checkbox } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const Subtask = ({
	task,
	toggleSubtaskStatus,
	removeSubtask,
	cardId,
	listId,
}) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px' }}>
			<Checkbox
				size={16}
				color='green'
				checked={task.isDone}
				onChange={(e) => toggleSubtaskStatus(listId, cardId, task.id)}
			/>
			{task.name}
			<IconX size={16} onClick={() => removeSubtask(listId, cardId, task.id)} />
		</div>
	);
};

export default Subtask;
