import React, { useEffect, useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { v4 as uuid } from 'uuid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import List from '../components/List/List'
import StoreApi from '../utils/storeApi'
import './styles.scss'
import { db, timestamp } from '../firebase'
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
} from 'firebase/firestore'
import CreateColumn from '../components/CreateColumn/CreateColumn'
import DeleteListModal from '../components/Modal/DeleteList'
import DeleteCardModal from '../components/Modal/DeleteCard'
import RenameListModal from '../components/Modal/RenameList'
import RenameCardModal from '../components/Modal/RenameCard'
import UpdateListLimitModal from '../components/Modal/UpdateListLimit'
import DeleteGroupModal from '../components/Modal/DeleteGroup'
import AddGroupModal from '../components/Modal/AddGroup'
import RenameGroupModal from '../components/Modal/RenameGroup'

export default function Home() {
	const [lists, setLists] = useState([])
	const [groups, setGroups] = useState([])
	// DELETE LIST MODAL
	const [deleteListModalOpened, setDeleteListModalOpened] = useState(false)
	const [deleteListId, setDeleteListId] = useState(null)
	//DELETE CARD MODAL
	const [deleteCardModalOpened, setDeleteCardModalOpened] = useState(false)
	const [deleteCardId, setDeleteCardId] = useState(null)
	const [deleteCardListId, setDeleteCardListId] = useState(null)
	//RENAME LIST MODAL
	const [renameListModalOpened, setRenameListModalOpened] = useState(false)
	const [renameListId, setRenameListId] = useState(null)
	const [oldListTitle, setOldListTitle] = useState('')
	//RENAME CARD MODAL
	const [renameCardModalOpened, setRenameCardModalOpened] = useState(false)
	const [renameCardId, setRenameCardId] = useState(null)
	const [renameCardListId, setRenameCardListId] = useState(null)
	const [oldCardTitle, setOldCardTitle] = useState('')
	const [cardColor, setCardColor] = useState('')
	// UPDATE LIST LIMIT
	const [updateListLimitModalOpened, setUpdateListLimitModalOpened] = useState(false)
	const [updateListLimitId, setUpdateListLimitId] = useState(null)
	const [oldListLimit, setOldListLimit] = useState(null)
	//ERROR ANIMATION
	const [limitErrorListId, setLimitErrorListId] = useState(null)
	// DELETE GROUP MODAL
	const [deleteGroupModalOpened, setDeleteGroupModalOpened] = useState(false)
	const [deleteGroupId, setDeleteGroupId] = useState(null)
	const [deleteGroupListId, setDeleteGroupListId] = useState(null)
	// ADD GROUP MODAL
	const [addGroupModalOpened, setAddGroupModalOpened] = useState(false)
	const [newGroupName, setNewGroupName] = useState('')
	// RENAME GROUP MODAL
	const [renameGroupModalOpened, setRenameGroupModalOpened] = useState(false)
	const [renameGroupId, setRenameGroupId] = useState(null)
	const [renameGroupListId, setRenameGroupListId] = useState(null)
	const [oldGroupName, setOldGroupName] = useState('')

	useEffect(() => {
		const q = query(collection(db, 'tests'), orderBy('timestamp', 'asc'))
		const q2 = query(collection(db, 'groups'), orderBy('timestamp', 'asc'))
		onSnapshot(q, snapShot => {
			setLists(
				snapShot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data(),
					}
				})
			)
		})
		onSnapshot(q2, snapShot => {
			setGroups(
				snapShot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data(),
					}
				})
			)
		})
	}, [])

	const handleToggleCollapse = async id => {
		// const groupRef = doc(db, 'tests', id);
		// await updateDoc(groupRef, { isCollapsed: !group.collapsed });
		const groupRef = doc(db, 'groups', id)
		const group = groups.find(group => group.id === id)
		await updateDoc(groupRef, { isCollapsed: !group.isCollapsed })
	}

	const addMoreCard = async (title, listId, group) => {
		const newCard = {
			id: uuid(),
			title: 'Nowe zadanie',
			owner: group,
			color: '#6dc773',
		}
		const listRef = doc(db, 'tests', listId)

		await updateDoc(listRef, {
			cards: arrayUnion(newCard),
		})
	}
	const removeCard = async (listId, cardId) => {
		const listRef = doc(db, 'tests', listId)
		const updatedLists = lists.map(list => {
			if (list.id === listId) {
				return {
					...list,
					cards: list.cards.filter(card => card.id !== cardId),
				}
			}
			return list
		})
		setLists(updatedLists)
		await updateDoc(listRef, {
			cards: updatedLists.find(list => list.id === listId).cards,
		})
	}

	const updateListLimit = async (listId, limit) => {
		const listRef = doc(db, 'tests', listId)
		const updatedLists = lists.map(list => {
			if (list.id === listId) {
				return {
					...list,
					limit: limit,
				}
			}
			return list
		})
		setLists(updatedLists)
		await updateDoc(listRef, {
			limit: updatedLists.find(list => list.id === listId).limit,
		})
	}



	const updateCardTitle = async (title, listId, cardId, color) => {
		const listRef = doc(db, 'tests', listId)

		const listIndex = lists.findIndex(list => list.id === listId)
		if (listIndex < 0) {
			return
		}

		const cardIndex = lists[listIndex].cards.findIndex(card => card.id === cardId)
		if (cardIndex < 0) {
			return
		}

		lists[listIndex].cards[cardIndex].title = title
		await updateDoc(listRef, {
			cards: lists[listIndex].cards.map(card => (card.id === cardId ? { ...card, title, color } : card)),
		})

		return lists[listIndex].cards[cardIndex]
	}

	const addMoreList = async () => {
		await addDoc(collection(db, 'tests'), {
			title: 'Nowa kolumna',
			cards: [],
			limit: 3,
			timestamp,
		})
	}

	const addMoreGroup = async groupName => {
		await addDoc(collection(db, 'groups'), {
			isCollapsed: false,
			name: groupName,
			timestamp,
		})
	}

	const updateListTitle = async (title, listId) => {
		const listRef = doc(db, 'tests', listId)
		const index = lists.findIndex(list => list.id === listId)
		if (index < 0) {
			return
		}

		lists[index].title = title
		await updateDoc(listRef, { title })

		return lists[index]
	}

	const deleteList = async listId => {
		await deleteDoc(doc(db, 'tests', listId))
	}

	const onDragEnd = async result => {
		const { destination, source, draggableId, type } = result
		if (!destination) {
			return
		}

		if (type === 'list') {
			const updatedLists = [...lists]
			const [removedList] = updatedLists.splice(source.index, 1)
			updatedLists.splice(destination.index, 0, removedList)

			const batch = writeBatch(db)
			const sourceRef = doc(db, 'tests', lists[source.index].id)
			const destinationRef = doc(db, 'tests', lists[destination.index].id)

			batch
				.update(destinationRef, {
					timestamp: lists[source.index].timestamp,
				})
				.update(sourceRef, {
					timestamp: lists[destination.index].timestamp,
				})

			setLists(updatedLists)
			await batch.commit()
			return
		}
		const splittedSource = source.droppableId.split(':')
		const splittedDestination = destination.droppableId.split(':')

		const sourceTask = lists.find(list => list.id === splittedSource[0])
		if (splittedSource[0] === splittedDestination[0]) {
			const list = lists.find(list => list.id === splittedSource[0])
			const updatedCards = Array.from(list.cards)
			const [removedCard] = updatedCards.splice(source.index, 1)
			updatedCards.splice(destination.index, 0, removedCard)
			updatedCards.map(card => {
				if (splittedSource[1] === card.owner && card.id === sourceTask.cards.find(card => card.id === draggableId).id) {
					card.owner = splittedDestination[1]
				}
				return card
			})

			const listRef = doc(db, 'tests', splittedDestination[0])
			await updateDoc(listRef, { cards: updatedCards })

			const updatedLists = lists.map(list => {
				if (list.id === splittedSource[0]) {
					return { ...list, cards: updatedCards }
				}
				return list
			})

			setLists(updatedLists)
		} else {
			const sourceListRef = doc(db, 'tests', source.droppableId.split(':')[0])
			const destinationListRef = doc(db, 'tests', destination.droppableId.split(':')[0])

			const batch = writeBatch(db)
			const sourceList = lists.find(list => list.id === source.droppableId.split(':')[0])
			const destinationList = lists.find(list => list.id === destination.droppableId.split(':')[0])
			const draggingCardPrev = sourceList.cards.find(card => card.id === draggableId)

			const draggingCard = {
				...draggingCardPrev,
				owner: destination.droppableId.split(':')[1],
			}

			sourceList.cards = sourceList.cards.filter(card => card.id !== draggableId)
			destinationList.cards.splice(destination.index, 0, draggingCard)
			batch.update(sourceListRef, { cards: sourceList.cards })
			batch.update(destinationListRef, { cards: destinationList.cards })

			const updatedLists = lists.map(list => {
				if (list.id === source.droppableId) {
					return { ...list, cards: sourceList.cards }
				}
				if (list.id === destination.droppableId) {
					return { ...list, cards: destinationList.cards }
				}
				return list
			})

			setLists(updatedLists)
			await batch.commit()
		}
	}

	const removeGroup = async (listId, group) => {
		const collectionRef = collection(db, 'tests')
		const querySnapshot = await getDocs(collectionRef)

		querySnapshot.forEach(doc => {
			const docRef = doc.ref
			const cards = doc.data().cards

			const updatedCards = cards.filter(card => card.owner !== group.name)
			updateDoc(docRef, { cards: updatedCards })
		})
		const updatedGroups = groups.filter(g => g.id !== group.id)
		setGroups(updatedGroups)

		await deleteDoc(doc(db, 'groups', group.id))
	}

	const renameGroup = async (listId, group, newName) => {
		const collectionRef = collection(db, 'tests')
		const querySnapshot = await getDocs(collectionRef)

		setLists(lists => {
			return lists.map(list => {
				if (list.id === listId) {
					return {
						...list,
						cards: list.cards.map(card => {
							if (card.owner === group.name) {
								return { ...card, owner: newName }
							}
							return card
						}),
					}
				}
				return list
			})
		})

		setGroups(groups => {
			return groups.map(g => {
				if (g.id === group.id) {
					return { ...g, name: newName }
				}
				return g
			})
		})

		querySnapshot.forEach(doc => {
			const docRef = doc.ref
			const cards = doc.data().cards

			const updatedCards = cards.map(card => {
				if (card.owner === group.name) {
					card.owner = newName
				}
				return card
			})

			updateDoc(docRef, { cards: updatedCards })
		})

		const updatedGroups = groups.map(g => {
			if (g.id === group.id) {
				return { ...g, name: newName }
			}
			return g
		})

		const groupRef = doc(db, 'groups', group.id)

		await updateDoc(groupRef, { name: newName })
	}

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
				}}>
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
						minValue={lists.find(list => list.id === updateListLimitId).cards.length || 0}
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

				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='app' type='list' direction='horizontal'>
						{provided => (
							<div className='wrapper' ref={provided.innerRef} {...provided.droppableProps}>
								<div className='wrapper-buttons'>
									<div className='create-btn'>
										<CreateColumn type='list' />
									</div>
									<div className='create-btn'>
										<button onClick={() => setAddGroupModalOpened(true)}>Dodaj grupę</button>
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
											/>
										)
									})}
									{provided.placeholder}
								</div>
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</StoreApi.Provider>
		</MantineProvider>
	)
}