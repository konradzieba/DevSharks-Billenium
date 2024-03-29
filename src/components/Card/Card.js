import React, { useContext, useState, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { IconX, IconPencil, IconPlus, IconChevronUp, IconCrown, IconCirclesRelation } from '@tabler/icons-react';
import storeApi from '../../utils/storeApi';
import './styles.scss';
import BuggedStatus from './BuggedStatus';
import Subtask from './Subtask';
import ProgressBar from './ProgressBar';
import AddSubtask from './AddSubtask';
import AssignedUsersAvatars from '../User/AssignedUsersAvatars';

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
	setCardColor,
	setAssignUserModalOpened,
	usersList,
	setOldAssignedUser,
	setIsBugged,
	toggleSubtaskStatus,
	removeSubtask,
	handleToggleSubtaskCollapse,
	addSubtask,
	setOldChildren,
	allChildren,
	lists,
}) {
	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(card.title);
	const { updateCardTitle, setRenameCardModalOpened } = useContext(storeApi);

	const cards = lists.flatMap(list => list.cards);
	const parent = cards.find(cardT => cardT.children.includes(card.id));
	const ids = parent ? parent.children : card.children;
	const handleOnMouseEnter = () => {
		ids.forEach(id => document.getElementById(id).classList.add('animation'));
		if (parent) {
			document.getElementById(parent.id).classList.add('animation');
		}
		else {
			document.getElementById(card.id).classList.add('animation');
		}
	};

	const handleOnMouseLeave = () => {
			ids.forEach(id => document.getElementById(id).classList.remove('animation'));
		if (parent) {
			document.getElementById(parent.id).classList.remove('animation');
		}
		else {
			document.getElementById(card.id).classList.remove('animation');
		}
	};

	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
					<div
						id={card.id}
						className={`card-wrap ${snapshot.isDragging && 'card-opacity'}`}
						style={{
							borderLeft: `10px solid ${card.color}`,
						}}>
						{card.children.length > 0 && (
							<button
								style={{ alignSelf: 'center', marginTop: '3px', background: 'none', border: 'none', cursor: 'pointer' }}
								onMouseEnter={handleOnMouseEnter}
								onMouseLeave={handleOnMouseLeave}>
								<IconCrown color={'gold'} size={26} strokeWidth='2' />
							</button>
						)}
						{allChildren.includes(card.id) && (
							<button
								style={{
									alignSelf: 'center',
									marginTop: '3px',
									background: 'none',
									border: 'none',
									cursor: 'pointer',
								}}
								onMouseEnter={handleOnMouseEnter}
								onMouseLeave={handleOnMouseLeave}>
								<IconCirclesRelation color={'royalblue'} size={26} strokeWidth='2' />
							</button>
						)}
						<div className='card-title'>
							{card.isBugged && <BuggedStatus />}
							<div className='card-title-container'>
								<div>{card.title}</div>
								<div className='card-title-container__icon-container'>
									<IconChevronUp
										onClick={() => handleToggleSubtaskCollapse(listId, card.id)}
										style={{
											transform: card.isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
										}}
										className='card-title-container__icon-container__icon'
									/>
								</div>
							</div>
							<div style={{ display: `${card.isCollapsed ? 'none' : 'block'}` }}>
								<div className='card-title-subtask-container'>
									<p className='card-title-subtask-underline'></p>
									{card.subtasks.map(task => {
										return (
											<Subtask
												key={task.id}
												task={task}
												toggleSubtaskStatus={toggleSubtaskStatus}
												removeSubtask={removeSubtask}
												cardId={card.id}
												listId={listId}
											/>
										);
									})}
									<AddSubtask listId={listId} cardId={card.id} addSubtask={addSubtask} />
								</div>
							</div>
							<div className='card-title-progressbar'>
								{card.subtasks.length > 0 && <ProgressBar subtasks={card.subtasks} />}
							</div>
						</div>
						<button
							className='card-edit-name-btn'
							onClick={() => {
								setCardColor(card.color);
								setRenameCardId(card.id);
								setRenameCardListId(listId);
								setOldCardTitle(card.title);
								setIsBugged(card.isBugged);
								setRenameCardModalOpened(true);
								setOldChildren(card.children);
							}}>
							<IconPencil />
						</button>
						<button
							className='card-delete-btn'
							onClick={() => {
								setDeleteCardId(card.id);
								setDeleteCardListId(listId);
								setDeleteCardModalOpened(true);
							}}>
							<IconX />
						</button>
						<div
							className='card-users'
							onClick={() => {
								setRenameCardId(card.id);
								setRenameCardListId(listId);
								setOldAssignedUser(Array.from(card.assignedUser));
								setAssignUserModalOpened(true);
							}}>
							<div className='card-users-container'>
								<AssignedUsersAvatars assignedUser={card.assignedUser} usersList={usersList} />
								{card.assignedUser.length < 4 ? (
									<IconPlus className='card-users-add' />
								) : (
									<div className='card-users-amount'>+{card.assignedUser.length - 3}</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
}
