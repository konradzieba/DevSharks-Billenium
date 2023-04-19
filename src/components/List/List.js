import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Title from '../Title/Title';
import Card from '../Card/Card';
import './styles.scss';
import CreateTask from '../CreateTask/CreateTask';
import { IconX, IconPencil, IconArrowBarToUp } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const UNSIGNED_GROUP_ID = 'QFzlKyV24rq8Vtmyz6Ai';

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
	groups,
	handleToggleCollapse,
	listIdx,
	lists,
	setDeleteGroupModalOpened,
	setDeleteGroupListId,
	setDeleteGroupId,
	setRenameGroupModalOpened,
	setRenameGroupId,
	setOldGroupName,
	setRenameGroupListId,
	setCardColor,
	setAssignUserModalOpened,
	usersList,
	setOldAssignedUser,
	setIsBugged,
	toggleSubtaskStatus,
	removeSubtask,
	addSubtask,
	handleToggleSubtaskCollapse,
}) {
	const { t } = useTranslation();

	const calculateHeight = group => {
		const max = lists
			.map(list => list.cards.filter(card => card.owner === group.name).length)
			.flat()
			.reduce((max, test) => Math.max(max, test), 0);
		return max;
	};

	const cardCount = (group, list) => {
		const count = list.cards.filter(card => card.owner === group.name).length;
		return count;
	};

	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided, snapshot) => (
				<div {...provided.draggableProps} ref={provided.innerRef}>
					<div className={`column-container ${snapshot.isDragging && 'column-opacity'}`} {...provided.dragHandleProps}>
						<div>
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

						<div className='task-container'>
							{groups.map((group, index) => {
								return (
									<div key={group.id} className='group-container'>
										{listIdx === 0 ? (
											<div className='group-title-container'>
												<div className='group-title-wrap'>
													{group.id === UNSIGNED_GROUP_ID ? t('defaultGroup') : group.name}
													<button
														onClick={() => {
															handleToggleCollapse(group.id);
														}}
														className='group-title-wrap-btn group-title-btns'>
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
													<div>
														<button
															onClick={() => {
																setRenameGroupId(group);
																setOldGroupName(group.name);
																setRenameGroupListId(list.id);
																setRenameGroupModalOpened(true);
															}}
															className='group-title-edit-btn group-title-btns'>
															<IconPencil size={24} color={'white'} />
														</button>
														<button
															onClick={() => {
																setDeleteGroupId(group);
																setDeleteGroupListId(list.id);
																setDeleteGroupModalOpened(true);
															}}
															className='group-title-delete-btn group-title-btns'>
															<IconX size={24} strokeWidth={2} color={'white'} />
														</button>
													</div>
												)}
											</div>
										) : (
											<div className='group-title-container test'>
												<div className='group-title-wrap'>
													{group.id === UNSIGNED_GROUP_ID ? t('defaultGroup') : group.name}
													<button
														onClick={() => {
															handleToggleCollapse(group.id);
														}}
														className='group-title-wrap-btn group-title-btns'>
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
													<div>
														<button
															onClick={() => {
																setRenameGroupId(group);
																setOldGroupName(group.name);
																setRenameGroupListId(list.id);
																setRenameGroupModalOpened(true);
															}}
															className='group-title-edit-btn group-title-btns'>
															<IconPencil size={24} color={'white'} />
														</button>
														<button
															onClick={() => {
																setDeleteGroupId(group);
																setDeleteGroupListId(list.id);
																setDeleteGroupModalOpened(true);
															}}
															className='group-title-delete-btn group-title-btns'>
															<IconX size={24} strokeWidth={2} color={'white'} />
														</button>
													</div>
												)}
											</div>
										)}
										<div
											key={group.id}
											className='group-task-droppable-container'
											style={{
												height: calculateHeight(group) * 200 + 100 + 'px',
												display: group.isCollapsed ? 'none' : 'block',
												backgroundColor: list.limit !== 0 && list.limit < cardCount(group, list) && '#C22C3B',
											}}>
											{!group.isCollapsed && <CreateTask group={group} listId={list.id} type='card' listIdx={listIdx}/>}
											<Droppable droppableId={`${list.id}:${group.name}`} type='task'>
												{provided => (
													<div ref={provided.innerRef} {...provided.droppableProps} className='group-task-container'>
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
																	setAssignUserModalOpened={setAssignUserModalOpened}
																	usersList={usersList}
																	setOldAssignedUser={setOldAssignedUser}
																	setIsBugged={setIsBugged}
																	toggleSubtaskStatus={toggleSubtaskStatus}
																	removeSubtask={removeSubtask}
																	addSubtask={addSubtask}
																	handleToggleSubtaskCollapse={handleToggleSubtaskCollapse}
																/>
															))}
														{provided.placeholder}
													</div>
												)}
											</Droppable>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
}
