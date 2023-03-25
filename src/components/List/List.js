import React, { useEffect, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Title from '../Title/Title'
import Card from '../Card/Card'
import './styles.scss'
import CreateTask from '../CreateTask/CreateTask'
import { IconSquareArrowUp, IconX, IconPencil, IconArrowBarToUp } from '@tabler/icons-react'
const UNSIGNED_GROUP_ID = 'QFzlKyV24rq8Vtmyz6Ai'
export default function List({
	list,
	index,
	setDeleteListId,
	setDeleteCardId,
	setDeleteCardListId,
	setDeleteCardModalOpened,
	setRenameListModalOpened,
	setRenameListId,
	setOldListTitle,
	setRenameCardId,
	setRenameCardListId,
	setOldCardTitle,
	setUpdateListLimitModalOpened,
	setUpdateListLimitId,
	setOldListLimit,
	limitErrorListId,
	setLimitErrorListId,
	groups,
	handleToggleCollapse,
	listIdx,
	lists,
	setDeleteGroupModalOpened,
	setDeleteGroupListId,
	setDeleteGroupId,
	renameGroup,
	setRenameGroupModalOpened,
	setRenameGroupId,
	setOldGroupName,
	setRenameGroupListId,
	setCardColor,
}) {
	const calculateHeight = group => {
		const max = lists
			.map(list => list.cards.filter(card => card.owner === group.name).length)
			.flat()
			.reduce((max, test) => Math.max(max, test), 0)
		return max
	}

	const cardCount = (group, list) => {
		const count = list.cards.filter(card => card.owner === group.name).length
		return count
	}

	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided, snapshot) => (
				<div {...provided.draggableProps} ref={provided.innerRef}>
					<div className={`list-cards ${snapshot.isDragging && 'list-opacity'}`} {...provided.dragHandleProps}>
						<div className='title-list'>
							<Title
								title={list.title}
								listId={list.id}
								limit={list.limit}
								setDeleteListId={setDeleteListId}
								setRenameListModalOpened={setRenameListModalOpened}
								setRenameListId={setRenameListId}
								setOldListTitle={setOldListTitle}
								setUpdateListLimitModalOpened={setUpdateListLimitModalOpened}
								setUpdateListLimitId={setUpdateListLimitId}
								setOldListLimit={setOldListLimit}
							/>
						</div>

						<div className='container-cards'>
							{groups.map((group, index) => {
								return (
									<div key={group.id} className='pool'>
										{listIdx === 0 ? (
											<div className='pool-title'>
												<div>{group.name} </div>
												<div className='relative'>
													<button
														onClick={() => {
															handleToggleCollapse(group.id)
														}}
														className='pool-title-wrap-btn'>
														<IconArrowBarToUp
															size={24}
															strokeWidth={2}
															color={'white'}
															style={{
																transform: group.isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
																transition: 'cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
															}}
														/>
													</button>
												</div>
												{group.id !== UNSIGNED_GROUP_ID && (
													<>
														<div className='relative'>
															<button
																onClick={() => {
																	setRenameGroupId(group)
																	setOldGroupName(group.name)
																	setRenameGroupListId(list.id)
																	setRenameGroupModalOpened(true)
																}}
																className='pool-title-edit-btn'>
																<IconPencil size={24} color={'white'} />
															</button>
														</div>
														<div className='relative'>
															<button
																onClick={() => {
																	setDeleteGroupId(group)
																	setDeleteGroupListId(list.id)
																	setDeleteGroupModalOpened(true)
																}}
																className='pool-title-delete-btn'>
																<IconX size={24} strokeWidth={2} color={'white'} />
															</button>
														</div>
													</>
												)}
											</div>
										) : (
											<div className='pool-wrapped'></div>
										)}

										<div
											key={group.id}
											className='pool-task-container'
											style={{
												height: calculateHeight(group) * 100 + 70 + 'px',
												display: group.isCollapsed ? 'none' : 'block',
												backgroundColor: list.limit !== 0 && list.limit < cardCount(group, list) && '#C22C3B',
											}}>
											<Droppable droppableId={`${list.id}:${group.name}`} type='task'>
												{provided => (
													<div ref={provided.innerRef} {...provided.droppableProps} className='card-container'>
														{list.cards
															.filter(card => card.owner === group.name)
															.map((card, index) => (
																<Card
																	key={card.id + group.id}
																	card={card}
																	group={group}
																	index={index}
																	listId={list.id}
																	setDeleteCardId={setDeleteCardId}
																	setDeleteCardListId={setDeleteCardListId}
																	setDeleteCardModalOpened={setDeleteCardModalOpened}
																	setRenameCardId={setRenameCardId}
																	setRenameCardListId={setRenameCardListId}
																	setOldCardTitle={setOldCardTitle}
																	setCardColor={setCardColor}
																/>
															))}
														{provided.placeholder}
													</div>
												)}
											</Droppable>
											{!group.isCollapsed && listIdx === 0 && <CreateTask group={group} listId={list.id} type='card' />}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</Draggable>
	)
}
