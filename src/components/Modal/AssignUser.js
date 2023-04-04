import { forwardRef, useState } from 'react'
import { Modal, Button, Group, Text, MultiSelect } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import Avatar from '../User/Avatar'

const AssignUserModal = ({
	setAssignUserModalOpened,
	users,
	cardId,
	listId,
	setCardId,
	setListId,
	assignUserToCard,
	setAssignUserId,
	setOldAssignedUser,
	oldAssignedUser,
	style,
	allAssigneds,
	assignLimit,
}) => {
	const usersWithAssigneds = users.filter(user => !(allAssigneds.reduce((n, val) => n + (val === user.id), 0) > assignLimit))
	const { t } = useTranslation()
	const [isOpened, setIsOpened] = useState(false)
	const [notFoundUserInData, setNotFoundUserInData] = useState(false)
	const prevData = usersWithAssigneds.map(user => {
		return {
			label: `${user.firstName} ${user.lastName}`,
			value: user.id,
			firstname: user.firstName.toString(),
			lastname: user.lastName.toString(),
			avatarcolor: user.avatarColor.toString(),
			avatarurl: user.avatarUrl.toString(),
			timesassigned: allAssigneds.reduce((n, val) => n + (val === user.id), 0),
		}
	})

	const data = [
		{
			label: t('assignUserModalNoAssign'),
			value: '',
			firstname: '',
			lastname: '',
			avatarcolor: '',
			avatarurl: '',
			timesassigned: 0,
		},
		...prevData,
	]

	const SelectItem = forwardRef(({ firstname, lastname, avatarcolor, label, avatarurl, timesassigned, ...others }, ref) => (
		<div ref={ref} {...others}>
			<Group noWrap>
				<Avatar
					style={style}
					firstName={firstname}
					lastName={lastname}
					avatarColor={avatarcolor}
					avatarUrl={avatarurl}
					enabledTooltip={false}
					showAssigneds={false}
				/>
				<div>
					<Text size='sm'>{label}</Text>
					<Text size='sm'>{timesassigned}</Text>
				</div>
			</Group>
		</div>
	))

	return (
		<Modal
			opened
			onClose={() => setAssignUserModalOpened(false)}
			title={t('assignUserModalTitle')}
			overlayProps={{ blur: 3 }}
			radius='md'
			closeOnEscape={() => setAssignUserModalOpened(false)}>
			<div style={{ height: `${isOpened ? '250px' : 'auto'}` }}>
				<MultiSelect
					placeholder={t('assignUserModalPlaceholder')}
					value={oldAssignedUser}
					onChange={value => {
						setOldAssignedUser(value)
					}}
					onKeyUp={e => {
						const user = data.find(user => user.label.toLowerCase().includes(e.target.value.toLowerCase()))
						if (user) {
							setNotFoundUserInData(false)
						} else {
							setNotFoundUserInData(true)
						}
					}}
					label={t('assignUserModalSelectLabel')}
					data={data}
					itemComponent={SelectItem}
					searchable={true}
					maxDropdownHeight={175}
					nothingFound={t('assignUserModalNothingFound')}
					dropdownPosition='bottom'
					selectOnBlur
					// allowDeselect
					onDropdownOpen={() => setIsOpened(true)}
					onDropdownClose={() => setIsOpened(false)}
					hoverOnSearchChange
				/>
			</div>
			<Button
				color='gray'
				radius='md'
				size='sm'
				style={{
					fontWeight: 'normal',
					display: 'block',
					margin: '0 auto',
					marginTop: '10px',
				}}
				onClick={() => {
					setAssignUserId('')
					setListId(null)
					setCardId(null)
					setOldAssignedUser(null)
					assignUserToCard(listId, cardId, oldAssignedUser)
					setAssignUserModalOpened(false)
				}}
				disabled={notFoundUserInData}>
				{t('assignUserModalBtn')}
			</Button>
		</Modal>
	)
}

export default AssignUserModal
