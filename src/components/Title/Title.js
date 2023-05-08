import { useContext } from 'react';
import { IconX, IconDotsVertical, IconEdit } from '@tabler/icons-react';
import storeApi from '../../utils/storeApi';
import { useTranslation } from 'react-i18next';
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
	const FIRST_COLUMN_BLOCKED = 'V3hWR9ETcwyU973VDXvP';
	const LAST_COLUMN_BLOCKED = 'mZTPFCSFozxolWX4V85v';
	const { t } = useTranslation();
	const { setDeleteListModalOpened } = useContext(storeApi);
	return (
		<div className='column-title-container'>
			<div>
				{listId === FIRST_COLUMN_BLOCKED
					? t('firstColumn')
					: listId === LAST_COLUMN_BLOCKED
					? t('lastColumn')
					: title}
				<button
					className='column-edit-name-btn column-btn'
					onClick={() => {
						setRenameListId(listId);
						setOldListTitle(title);
						setRenameListModalOpened(true);
					}}
				>
					<IconEdit />
				</button>
				{listId !== FIRST_COLUMN_BLOCKED && listId !== LAST_COLUMN_BLOCKED && (
					<button
						className='column-edit-limit-btn column-btn'
						onClick={() => {
							setUpdateListLimitId(listId);
							setOldListLimit(limit);
							setUpdateListLimitModalOpened(true);
						}}
					>
						<IconDotsVertical />
					</button>
				)}

				{listId !== FIRST_COLUMN_BLOCKED && listId !== LAST_COLUMN_BLOCKED && (
					<button
						className='column-delete-btn column-btn'
						onClick={() => {
							setDeleteListId(listId);
							setDeleteListModalOpened(true);
						}}
					>
						<IconX />
					</button>
				)}
			</div>
			<div>
				<p className='column-limit'>
					{limit === 0 ? t('noLimit') : `${t('limit')}: ${limit}`}
				</p>
			</div>
		</div>
	);
}
