import React, { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IconX, IconPencil } from '@tabler/icons-react';
import storeApi from '../../utils/storeApi';

import './styles.scss';

export default function Card({
	card,
	index,
	listId,
	setDeleteCardId,
	setDeleteCardListId,
	setDeleteCardModalOpened,
	setRenameCardId,
	setRenameCardListId,
	setOldCardTitle,
	group,
	setCardColor,
}) {
	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(card.title);
	const { updateCardTitle, setRenameCardModalOpened } = useContext(storeApi);

	const handleOnBlur = (cardId) => {
		updateCardTitle(newTitle, index, listId);
		setOpen(!open);
	};

	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
				>
					<div className={`card-wrap ${snapshot.isDragging && 'card-opacity'}`} 
					style={{
						borderLeft: `10px solid ${card.color}`
					}}>
						<div className='card-title'>{card.title}</div>
						<button
							className='card-edit-name-btn'
							onClick={() => {
								setCardColor(card.color);
								setRenameCardId(card.id);
								setRenameCardListId(listId);
								setOldCardTitle(card.title);
								setRenameCardModalOpened(true);
							}}
						>
							<IconPencil />
						</button>
						<button
							className='card-delete-btn'
							onClick={() => {
								setDeleteCardId(card.id);
								setDeleteCardListId(listId);
								setDeleteCardModalOpened(true);
							}}
						>
							<IconX />
						</button>
					</div>
				</div>
			)}
		</Draggable>
	);
}
