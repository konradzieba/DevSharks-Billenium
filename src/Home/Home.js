import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../components/List/List';
import StoreApi from '../utils/storeApi';
import './styles.scss';
import Navbar from '../components/Navbar/Navbar';
import { db, timestamp } from '../firebase';
import {
	addDoc,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc,
	writeBatch,
	getDocs,
} from 'firebase/firestore';
import CreateColumn from '../components/CreateColumn/CreateColumn';
import DeleteListModal from '../components/Modal/DeleteList';
import DeleteCardModal from '../components/Modal/DeleteCard';
import RenameListModal from '../components/Modal/RenameList';
import RenameCardModal from '../components/Modal/RenameCard';
import UpdateListLimitModal from '../components/Modal/UpdateListLimit';
import DeleteGroupModal from '../components/Modal/DeleteGroup';
import AddGroupModal from '../components/Modal/AddGroup';
import RenameGroupModal from '../components/Modal/RenameGroup';
import Avatar from '../components/User/Avatar';
import AssignUserModal from '../components/Modal/AssignUser';
import { useTranslation } from 'react-i18next';
import i18n from '../translations/i18n';
import BuggedMoveNotification from '../components/notifications/BuggedMoveNotification';

export default function Home() {
	const { t } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const [lists, setLists] = useState([]);
	const [groups, setGroups] = useState([]);
	const [usersList, setUsersList] = useState([]);
	// DELETE LIST MODAL
	const [deleteListModalOpened, setDeleteListModalOpened] = useState(false);
	const [deleteListId, setDeleteListId] = useState(null);
	//DELETE CARD MODAL
	const [deleteCardModalOpened, setDeleteCardModalOpened] = useState(false);
	const [deleteCardId, setDeleteCardId] = useState(null);
	const [deleteCardListId, setDeleteCardListId] = useState(null);
	//RENAME LIST MODAL
	const [renameListModalOpened, setRenameListModalOpened] = useState(false);
	const [renameListId, setRenameListId] = useState(null);
	const [oldListTitle, setOldListTitle] = useState('');
	//RENAME CARD MODAL
	const [renameCardModalOpened, setRenameCardModalOpened] = useState(false);
	const [renameCardId, setRenameCardId] = useState(null);
	const [renameCardListId, setRenameCardListId] = useState(null);
	const [oldCardTitle, setOldCardTitle] = useState('');
	const [cardColor, setCardColor] = useState('');
	const [isBugged, setIsBugged] = useState(null);
	// UPDATE LIST LIMIT
	const [updateListLimitModalOpened, setUpdateListLimitModalOpened] =
		useState(false);
	const [updateListLimitId, setUpdateListLimitId] = useState(null);
	const [oldListLimit, setOldListLimit] = useState(null);
	//ERROR ANIMATION
	const [limitErrorListId, setLimitErrorListId] = useState(null);
	// DELETE GROUP MODAL
	const [deleteGroupModalOpened, setDeleteGroupModalOpened] = useState(false);
	const [deleteGroupId, setDeleteGroupId] = useState(null);
	const [deleteGroupListId, setDeleteGroupListId] = useState(null);
	// ADD GROUP MODAL
	const [addGroupModalOpened, setAddGroupModalOpened] = useState(false);
	// RENAME GROUP MODAL
	const [renameGroupModalOpened, setRenameGroupModalOpened] = useState(false);
	const [renameGroupId, setRenameGroupId] = useState(null);
	const [renameGroupListId, setRenameGroupListId] = useState(null);
	const [oldGroupName, setOldGroupName] = useState('');
	// ASSIGN USER TO TASK MODAL
	const [assignUserModalOpened, setAssignUserModalOpened] = useState(false);
	const [assignUserList, setAssignUserList] = useState(null);
	const [oldAssignUserList, setOldAssignUserList] = useState(null);
	// NOTIFICATIONS
	const [bugMovedNotification, setBugMovedNotification] = useState(false);

	useEffect(() => {
		const q = query(collection(db, 'tests'), orderBy('timestamp', 'asc'));
		const q2 = query(collection(db, 'groups'), orderBy('timestamp', 'asc'));
		const users = query(collection(db, 'users'));
		onSnapshot(q, (snapShot) => {
			setLists(
				snapShot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
		onSnapshot(q2, (snapShot) => {
			setGroups(
				snapShot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
		onSnapshot(users, (snapShot) => {
			setUsersList(
				snapShot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
	}, []);

	const allAssigneds = lists
		.map((list) => list.cards.flatMap((card) => card.assignedUser))
		.flat();

	console.log('allAssigneds: ', allAssigneds);

	useEffect(() => {
		if (bugMovedNotification) {
			setTimeout(() => {
				setBugMovedNotification(false);
			}, 3000);
		}

		return () => {
			clearTimeout();
		};
	}, [bugMovedNotification]);

	const handleToggleCollapse = async (id) => {
		const groupRef = doc(db, 'groups', id);
		const group = groups.find((group) => group.id === id);
		await updateDoc(groupRef, { isCollapsed: !group.isCollapsed });
	};

	const handleToggleSubtaskCollapse = async (listId, cardId) => {
		const listRef = doc(db, 'tests', listId);
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.map((card) => {
						if (card.id === cardId) {
							return {
								...card,
								isCollapsed: !card.isCollapsed,
							};
						} else {
							return card;
						}
					}),
				};
			} else {
				return list;
			}
		});
		await updateDoc(listRef, {
			cards: updatedLists.find((list) => list.id === listId).cards,
		});
	};

	const addMoreCard = async (title, listId, group) => {
		const newCard = {
			id: uuid(),
			title: t('newTaskTitle'),
			owner: group,
			color: '#8DC44F',
			assignedUser: [],
			isBugged: false,
			subtasks: [],
			isCollapsed: false,
		};
		const listRef = doc(db, 'tests', listId);

		await updateDoc(listRef, {
			cards: arrayUnion(newCard),
		});
	};
	const removeCard = async (listId, cardId) => {
		const listRef = doc(db, 'tests', listId);
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.filter((card) => card.id !== cardId),
				};
			}
			return list;
		});
		setLists(updatedLists);
		await updateDoc(listRef, {
			cards: updatedLists.find((list) => list.id === listId).cards,
		});
	};

	const updateListLimit = async (listId, limit) => {
		const listRef = doc(db, 'tests', listId);
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					limit: limit,
				};
			}
			return list;
		});
		setLists(updatedLists);
		await updateDoc(listRef, {
			limit: updatedLists.find((list) => list.id === listId).limit,
		});
	};

	const updateCardTitle = async (title, listId, cardId, color, isBugged) => {
		const listRef = doc(db, 'tests', listId);

		const listIndex = lists.findIndex((list) => list.id === listId);
		if (listIndex < 0) {
			return;
		}

		const cardIndex = lists[listIndex].cards.findIndex(
			(card) => card.id === cardId
		);
		if (cardIndex < 0) {
			return;
		}

		lists[listIndex].cards[cardIndex].title = title;
		await updateDoc(listRef, {
			cards: lists[listIndex].cards.map((card) =>
				card.id === cardId ? { ...card, title, color, isBugged } : card
			),
		});

		return lists[listIndex].cards[cardIndex];
	};

	const addMoreList = async () => {
		await addDoc(collection(db, 'tests'), {
			title: t('newColumnTitle'),
			cards: [],
			limit: 3,
			timestamp,
		});
	};

	const addMoreGroup = async (groupName) => {
		await addDoc(collection(db, 'groups'), {
			isCollapsed: false,
			name: groupName,
			timestamp,
		});
	};

	const updateListTitle = async (title, listId) => {
		const listRef = doc(db, 'tests', listId);
		const index = lists.findIndex((list) => list.id === listId);
		if (index < 0) {
			return;
		}

		lists[index].title = title;
		await updateDoc(listRef, { title });

		return lists[index];
	};

	const deleteList = async (listId) => {
		const listRef = doc(db, 'tests', listId);
		const list = lists.find((list) => list.id === listId);
		const cards = list.cards;
		const defaultListRef = doc(db, 'tests', 'JDFaQcxiM4CmBnEYcVQ4');
		await updateDoc(defaultListRef, {
			cards: arrayUnion(...cards),
		});

		await deleteDoc(doc(db, 'tests', listId));
	};

	const onDragEnd = async (result) => {
		const { destination, source, draggableId, type } = result;
		if (!destination) {
			return;
		}

		if (type === 'list') {
			const updatedLists = [...lists];
			const [removedList] = updatedLists.splice(source.index, 1);
			updatedLists.splice(destination.index, 0, removedList);

			const batch = writeBatch(db);
			const sourceRef = doc(db, 'tests', lists[source.index].id);
			const destinationRef = doc(db, 'tests', lists[destination.index].id);

			batch
				.update(destinationRef, {
					timestamp: lists[source.index].timestamp,
				})
				.update(sourceRef, {
					timestamp: lists[destination.index].timestamp,
				});

			setLists(updatedLists);
			await batch.commit();
			return;
		}
		const splittedSource = source.droppableId.split(':');
		const splittedDestination = destination.droppableId.split(':');

		const cardBugFlag = lists
			.find((list) => list.id === splittedSource[0])
			.cards.find((card) => card.id === draggableId);
		if (
			cardBugFlag.isBugged &&
			splittedDestination[0] === 'HE79KxdSDne6hCCGbz45'
		) {
			setBugMovedNotification(true);
			return;
		}

		const sourceTask = lists.find((list) => list.id === splittedSource[0]);
		if (splittedSource[0] === splittedDestination[0]) {
			const list = lists.find((list) => list.id === splittedSource[0]);
			const updatedCards = Array.from(list.cards);
			const [removedCard] = updatedCards.splice(source.index, 1);
			updatedCards.splice(destination.index, 0, removedCard);
			updatedCards.map((card) => {
				if (
					splittedSource[1] === card.owner &&
					card.id === sourceTask.cards.find((card) => card.id === draggableId).id
				) {
					card.owner = splittedDestination[1];
				}
				return card;
			});

			const listRef = doc(db, 'tests', splittedDestination[0]);
			await updateDoc(listRef, { cards: updatedCards });

			const updatedLists = lists.map((list) => {
				if (list.id === splittedSource[0]) {
					return { ...list, cards: updatedCards };
				}
				return list;
			});

			setLists(updatedLists);
		} else {
			const sourceListRef = doc(db, 'tests', source.droppableId.split(':')[0]);
			const destinationListRef = doc(
				db,
				'tests',
				destination.droppableId.split(':')[0]
			);

			const batch = writeBatch(db);
			const sourceList = lists.find(
				(list) => list.id === source.droppableId.split(':')[0]
			);
			const destinationList = lists.find(
				(list) => list.id === destination.droppableId.split(':')[0]
			);
			const draggingCardPrev = sourceList.cards.find(
				(card) => card.id === draggableId
			);

			const draggingCard = {
				...draggingCardPrev,
				owner: destination.droppableId.split(':')[1],
			};

			sourceList.cards = sourceList.cards.filter(
				(card) => card.id !== draggableId
			);
			destinationList.cards.splice(destination.index, 0, draggingCard);
			batch.update(sourceListRef, { cards: sourceList.cards });
			batch.update(destinationListRef, { cards: destinationList.cards });

			const updatedLists = lists.map((list) => {
				if (list.id === source.droppableId) {
					return { ...list, cards: sourceList.cards };
				}
				if (list.id === destination.droppableId) {
					return { ...list, cards: destinationList.cards };
				}
				return list;
			});

			setLists(updatedLists);
			await batch.commit();
		}
	};

	const removeGroup = async (listId, group) => {
		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			// const updatedCards = cards.filter(card => card.owner !== group.name)
			const updatedCards = cards.map((card) => {
				if (card.owner === group.name) {
					return { ...card, owner: 'Nieprzypisane' };
				}
				return card;
			});
			updateDoc(docRef, { cards: updatedCards });
		});
		const updatedGroups = groups.filter((g) => g.id !== group.id);
		setGroups(updatedGroups);

		await deleteDoc(doc(db, 'groups', group.id));
	};

	const renameGroup = async (listId, group, newName) => {
		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		setLists((lists) => {
			return lists.map((list) => {
				if (list.id === listId) {
					return {
						...list,
						cards: list.cards.map((card) => {
							if (card.owner === group.name) {
								return { ...card, owner: newName };
							}
							return card;
						}),
					};
				}
				return list;
			});
		});

		setGroups((groups) => {
			return groups.map((g) => {
				if (g.id === group.id) {
					return { ...g, name: newName };
				}
				return g;
			});
		});

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			const updatedCards = cards.map((card) => {
				if (card.owner === group.name) {
					card.owner = newName;
				}
				return card;
			});

			updateDoc(docRef, { cards: updatedCards });
		});

		const groupRef = doc(db, 'groups', group.id);

		await updateDoc(groupRef, { name: newName });
	};

	const updateAssignUserList = async (listId, cardId, assignedUser) => {
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.map((card) => {
						if (card.id === cardId) {
							return { ...card, assignedUser };
						}
						return card;
					}),
				};
			}
			return list;
		});

		setLists(updatedLists);

		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			const updatedCards = cards.map((card) => {
				if (card.id === cardId) {
					card.assignedUser = assignedUser;
				}
				return card;
			});

			updateDoc(docRef, { cards: updatedCards });
		});
	};

	const toggleSubtaskStatus = async (listId, cardId, subtaskId) => {
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.map((card) => {
						if (card.id === cardId) {
							return {
								...card,
								subtasks: card.subtasks.map((subtask) => {
									if (subtask.id === subtaskId) {
										return {
											...subtask,
											isDone: !subtask.isDone,
										};
									}
									return subtask;
								}),
							};
						}
						return card;
					}),
				};
			}
			return list;
		});

		setLists(updatedLists);

		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			const updatedCards = cards.map((card) => {
				if (card.id === cardId) {
					card.subtasks = card.subtasks.map((subtask) => {
						if (subtask.id === subtaskId) {
							subtask.isDone = !subtask.isDone;
						}
						return subtask;
					});
				}
				return card;
			});

			updateDoc(docRef, { cards: updatedCards });
		});
	};

	const addSubtask = async (listId, cardId, subtask) => {
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.map((card) => {
						if (card.id === cardId) {
							return {
								...card,
								subtasks: [...card.subtasks, subtask],
							};
						}
						return card;
					}),
				};
			}
			return list;
		});

		setLists(updatedLists);

		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			const updatedCards = cards.map((card) => {
				if (card.id === cardId) {
					card.subtasks = [...card.subtasks, subtask];
				}
				return card;
			});

			updateDoc(docRef, { cards: updatedCards });
		});
	};

	const removeSubtask = async (listId, cardId, subtaskId) => {
		const updatedLists = lists.map((list) => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.map((card) => {
						if (card.id === cardId) {
							return {
								...card,
								subtasks: card.subtasks.filter((subtask) => subtask.id !== subtaskId),
							};
						}
						return card;
					}),
				};
			}
			return list;
		});

		setLists(updatedLists);

		const collectionRef = collection(db, 'tests');
		const querySnapshot = await getDocs(collectionRef);

		querySnapshot.forEach((doc) => {
			const docRef = doc.ref;
			const cards = doc.data().cards;

			const updatedCards = cards.map((card) => {
				if (card.id === cardId) {
					card.subtasks = card.subtasks.filter(
						(subtask) => subtask.id !== subtaskId
					);
				}
				return card;
			});

			updateDoc(docRef, { cards: updatedCards });
		});
	};

	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<StoreApi.Provider
				value={{
					addMoreCard,
					addMoreList,
					updateListTitle,
					removeCard,
					updateCardTitle,
					deleteList,
					setDeleteListModalOpened,
					setDeleteListId,
					setRenameCardModalOpened,
				}}
			>
				{deleteListModalOpened && (
					<DeleteListModal
						deleteListModalOpened={deleteListModalOpened}
						setDeleteListModalOpened={setDeleteListModalOpened}
						deleteList={deleteList}
						deleteListId={deleteListId}
						setDeleteListId={setDeleteListId}
					/>
				)}
				{deleteCardModalOpened && (
					<DeleteCardModal
						deleteCardModalOpened={deleteCardModalOpened}
						setDeleteCardModalOpened={setDeleteCardModalOpened}
						removeCard={removeCard}
						deleteCardId={deleteCardId}
						deleteCardListId={deleteCardListId}
						setDeleteCardId={setDeleteCardId}
						setDeleteCardListId={setDeleteCardListId}
					/>
				)}
				{renameListModalOpened && (
					<RenameListModal
						renameListModalOpened={renameListModalOpened}
						setRenameListModalOpened={setRenameListModalOpened}
						updateListTitle={updateListTitle}
						oldListTitle={oldListTitle}
						setOldListTitle={setOldListTitle}
						setRenameListId={setRenameListId}
						renameListId={renameListId}
					/>
				)}
				{renameCardModalOpened && (
					<RenameCardModal
						renameCardModalOpened={renameCardModalOpened}
						setRenameCardModalOpened={setRenameCardModalOpened}
						updateCardTitle={updateCardTitle}
						oldCardTitle={oldCardTitle}
						setOldCardTitle={setOldCardTitle}
						setRenameCardId={setRenameCardId}
						setRenameCardListId={setRenameCardListId}
						renameCardId={renameCardId}
						renameCardListId={renameCardListId}
						cardColor={cardColor}
						setCardColor={setCardColor}
						bugged={isBugged}
					/>
				)}

				{updateListLimitModalOpened && (
					<UpdateListLimitModal
						updateListLimitModalOpened={updateListLimitModalOpened}
						setUpdateListLimitModalOpened={setUpdateListLimitModalOpened}
						updateListLimit={updateListLimit}
						oldListLimit={oldListLimit}
						updateListLimitId={updateListLimitId}
						setUpdateListLimitId={setUpdateListLimitId}
						setOldListLimit={setOldListLimit}
						minValue={
							lists.find((list) => list.id === updateListLimitId).cards.length || 0
						}
					/>
				)}
				{deleteGroupModalOpened && (
					<DeleteGroupModal
						deleteGroupModalOpened={deleteGroupModalOpened}
						setDeleteGroupModalOpened={setDeleteGroupModalOpened}
						removeGroup={removeGroup}
						deleteGroupId={deleteGroupId}
						deleteGroupListId={deleteGroupListId}
						setDeleteGroupId={setDeleteGroupId}
						setDeleteGroupListId={setDeleteGroupListId}
					/>
				)}
				{addGroupModalOpened && (
					<AddGroupModal
						addGroupModalOpened={addGroupModalOpened}
						setAddGroupModalOpened={setAddGroupModalOpened}
						addMoreGroup={addMoreGroup}
						groups={groups}
					/>
				)}
				{renameGroupModalOpened && (
					<RenameGroupModal
						setRenameGroupModalOpened={setRenameGroupModalOpened}
						renameGroup={renameGroup}
						oldGroupName={oldGroupName}
						setOldGroupName={setOldGroupName}
						renameGroupId={renameGroupId}
						setRenameGroupId={setRenameGroupId}
						groups={groups}
						renameGroupListId={renameGroupListId}
					/>
				)}
				{assignUserModalOpened && (
					<AssignUserModal
						setAssignUserModalOpened={setAssignUserModalOpened}
						users={usersList}
						cardId={renameCardId}
						listId={renameCardListId}
						setCardId={setRenameCardId}
						setListId={setRenameCardListId}
						assignUserId={assignUserList}
						setAssignUserId={setAssignUserList}
						assignUserToCard={updateAssignUserList}
						oldAssignedUser={oldAssignUserList}
						setOldAssignedUser={setOldAssignUserList}
					/>
				)}
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='app' type='list' direction='horizontal'>
						{(provided) => (
							<div
								className='wrapper'
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<Navbar />
								<div className='wrapper-buttons'>
									<div className='create-btn'>
										<CreateColumn type='list' />
									</div>
									<div className='create-btn'>
										<button onClick={() => setAddGroupModalOpened(true)}>
											{t('addGroup')}
										</button>
									</div>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
									}}
								>
									<div>{t('usersList')}</div>
									<div
										style={{
											height: '60px',
											color: 'black',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											gap: '10px',
										}}
									>
										{usersList.map((user) => {
											return (
												<Avatar
													firstName={user.firstName}
													lastName={user.lastName}
													avatarColor={user.avatarColor}
													key={user.id}
													avatarUrl={user.avatarUrl}
													enabledTooltip={true}
													assigneds={
														allAssigneds.filter((assign) => assign === user.id).length
													}
												/>
											);
										})}
									</div>
								</div>

								<div className='cards'>
									{lists.map((list, index) => {
										return (
											<List
												groups={groups}
												lists={lists}
												listIdx={index}
												list={list}
												key={list.id}
												index={index}
												setDeleteListId={setDeleteListId}
												setDeleteCardId={setDeleteCardId}
												setDeleteCardListId={setDeleteCardListId}
												setDeleteCardModalOpened={setDeleteCardModalOpened}
												setRenameListModalOpened={setRenameListModalOpened}
												setRenameListId={setRenameListId}
												setOldListTitle={setOldListTitle}
												setRenameCardId={setRenameCardId}
												setRenameCardListId={setRenameCardListId}
												setOldCardTitle={setOldCardTitle}
												setUpdateListLimitModalOpened={setUpdateListLimitModalOpened}
												setUpdateListLimitId={setUpdateListLimitId}
												setOldListLimit={setOldListLimit}
												setLimitErrorListId={setLimitErrorListId}
												limitErrorListId={limitErrorListId}
												handleToggleCollapse={handleToggleCollapse}
												removeGroup={removeGroup}
												setDeleteGroupModalOpened={setDeleteGroupModalOpened}
												setDeleteGroupListId={setDeleteGroupListId}
												setDeleteGroupId={setDeleteGroupId}
												renameGroup={renameGroup}
												setRenameGroupModalOpened={setRenameGroupModalOpened}
												setRenameGroupId={setRenameGroupId}
												setOldGroupName={setOldGroupName}
												setRenameGroupListId={setRenameGroupListId}
												setCardColor={setCardColor}
												setAssignUserModalOpened={setAssignUserModalOpened}
												usersList={usersList}
												setOldAssignedUser={setOldAssignUserList}
												setIsBugged={setIsBugged}
												toggleSubtaskStatus={toggleSubtaskStatus}
												removeSubtask={removeSubtask}
												addSubtask={addSubtask}
												handleToggleSubtaskCollapse={handleToggleSubtaskCollapse}
												allAssigneds={allAssigneds}
											/>
										);
									})}
									{provided.placeholder}
								</div>
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</StoreApi.Provider>
			{bugMovedNotification && <BuggedMoveNotification />}
		</MantineProvider>
	);
}
