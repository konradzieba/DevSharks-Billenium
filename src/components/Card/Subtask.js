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
		<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
			<Checkbox
				color='green'
				checked={task.isDone}
				onChange={(e) => toggleSubtaskStatus(listId, cardId, task.id)}
			/>
			{task.name}
			<IconX onClick={() => removeSubtask(listId, cardId, task.id)} />
		</div>
	);
};

export default Subtask;
