import React, { useContext, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { IconX, IconPencil, IconPlus, IconArrowBarToUp } from '@tabler/icons-react'
import storeApi from '../../utils/storeApi'

import './styles.scss'
import Avatar from '../User/Avatar'
import BuggedStatus from './BuggedStatus'
import Subtask from './Subtask'
import ProgressBar from './ProgressBar'
import AddSubtask from './AddSubtask'
import AssignedUsersAvatars from '../User/AssignedUsersAvatars'

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
}) {
	const [open, setOpen] = useState(false)
	const [newTitle, setNewTitle] = useState(card.title)
	const { updateCardTitle, setRenameCardModalOpened } = useContext(storeApi)

	const handleOnBlur = cardId => {
		updateCardTitle(newTitle, index, listId)
		setOpen(!open)
	}

	return (
		<Draggable draggableId={card.id} index={index}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
					<div
						className={`card-wrap ${snapshot.isDragging && 'card-opacity'}`}
						style={{
							borderLeft: `10px solid ${card.color}`,
						}}>
						<div className='card-title'>
							{card.isBugged && <BuggedStatus />}
							<div>
								{card.title}{' '}
								<IconArrowBarToUp
									onClick={() => handleToggleSubtaskCollapse(listId, card.id)}
									style={{
										transform: card.isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
										transition: 'cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
									}}
								/>
							</div>
							<div style={{ display: `${card.isCollapsed ? 'none' : 'block'}` }}>
								<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
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
										)
									})}
									<AddSubtask listId={listId} cardId={card.id} addSubtask={addSubtask} />
								</div>
								{/* <AddSubtask listId={listId} cardId={card.id} addSubtask={addSubtask} /> */}
							</div>
							{/* PROGRESS BAR */}
							<div style={{ marginTop: '5px' }}>
								{card.subtasks.length > 0 && <ProgressBar subtasks={card.subtasks} />}
							</div>
						</div>
						{/* {card.isBugged && <BuggedStatus />} */}
						<button
							className='card-edit-name-btn'
							onClick={() => {
								setCardColor(card.color)
								setRenameCardId(card.id)
								setRenameCardListId(listId)
								setOldCardTitle(card.title)
								setIsBugged(card.isBugged)
								setRenameCardModalOpened(true)
							}}>
							<IconPencil />
						</button>
						<button
							className='card-delete-btn'
							onClick={() => {
								setDeleteCardId(card.id)
								setDeleteCardListId(listId)
								setDeleteCardModalOpened(true)
							}}>
							<IconX />
						</button>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-end',
								padding: ' 0 10px 10px',
								cursor: 'pointer',
							}}
							onClick={() => {
								setRenameCardId(card.id)
								setRenameCardListId(listId)
								setOldAssignedUser(Array.from(card.assignedUser))
								setAssignUserModalOpened(true)
							}}>
							<div style={{display: 'flex', marginTop: '5px'}}>
								<AssignedUsersAvatars assignedUser={card.assignedUser} usersList={usersList} />
								{card.assignedUser.length < 4 ? (
									<IconPlus
										style={{
											border: '1px solid #ccc',
											borderRadius: '50%',
											width: '40px',
											height: '40px',
											marginLeft: '0.625rem',
											padding: '8px',
										}}
									/>
								) : (
									<div
										style={{
											border: '1px solid #ccc',
											borderRadius: '50%',
											width: '40px',
											height: '40px',
											marginLeft: '0.625rem',
											// padding: '10px',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											fontSize: '20px',
										}}>
										+{card.assignedUser.length - 3}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	)
}
