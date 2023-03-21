import { useContext } from 'react';
import { IconX, IconDotsVertical, IconEdit} from '@tabler/icons-react';
import storeApi from '../../utils/storeApi';
import './styles.scss';

export default function Title({
	title,
	listId,
	limit,
	setDeleteListId,
	setRenameListModalOpened,
	setRenameListId,
	setOldListTitle,
	setUpdateListLimitModalOpened,
	setUpdateListLimitId,
	setOldListLimit,
}) {
	const FIRST_COLUMN_BLOCKED = 'JDFaQcxiM4CmBnEYcVQ4';
	const LAST_COLUMN_BLOCKED = 'HE79KxdSDne6hCCGbz45';
	const { setDeleteListModalOpened } = useContext(storeApi);
	return (
		<div className='title-wrap'>
			<div>
			{title}
			<button
				className='edit-list-name-btn'
				onClick={() => {
					setRenameListId(listId);
					setOldListTitle(title);
					setRenameListModalOpened(true);
				}}
			>
				<IconEdit />
			</button>
			{listId !== FIRST_COLUMN_BLOCKED && listId !== LAST_COLUMN_BLOCKED && (
				<button className='edit-list-limit-btn' onClick={() => {
					setUpdateListLimitId(listId);
					setOldListLimit(limit);
					setUpdateListLimitModalOpened(true);
				}}>
					<IconDotsVertical />
				</button>
			)}

			{listId !== FIRST_COLUMN_BLOCKED && listId !== LAST_COLUMN_BLOCKED && (
				<button
					className='delete-list-btn'
					onClick={() => {
						setDeleteListId(listId);
						setDeleteListModalOpened(true);
					}}
				>
					<IconX />
				</button>
			)}
			</div>
			<div><p className='list-limit'>{limit === 0 ? `Bez limitu` : `Limit: ${limit}`}</p></div>
		</div>
	);
}
