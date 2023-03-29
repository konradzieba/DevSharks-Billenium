import Avatar from './Avatar'
import { Menu, rem, MantineProvider, Flex, FileButton, Button, UnstyledButton, Text } from '@mantine/core'
import { IconUpload, IconLogout } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useCallback } from 'react'

const UserPanel = ({ loggedUserInfo, handleLogout, uploadUserAvatar, setFile, file }) => {

	useEffect(() => {
		if (file && loggedUserInfo.id) {
			uploadUserAvatar(loggedUserInfo.id)
		}
	}, [file, loggedUserInfo.id])

	return (
		<MantineProvider theme={{ colorScheme: 'dark',  fontFamily: 'Lato' }} >
			<div>
				<Menu closeOnItemClick={false}>
					<Menu.Target>
						<div>
							<button style={{ display: 'flex', cursor: 'pointer', background: 'none', border: 'none' }}>
								<Avatar
									firstName={loggedUserInfo.firstName}
									lastName={loggedUserInfo.lastName}
									avatarColor={loggedUserInfo.avatarColor}
									enabledTooltip={false}
									avatarUrl={loggedUserInfo.avatarUrl}
								/>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										marginLeft: '5px',
										alignItems: 'flex-start',
										justifyContent: 'center',
										height: '40px',
										marginRight: '5px',
										color: '#e4e4e4',
									}}>
									<Text fz={16} fw={500}>
										{loggedUserInfo.firstName} {loggedUserInfo.lastName}
									</Text>
									<Text fz={12} fw={200}>{loggedUserInfo.email}</Text>
								</div>
							</button>
						</div>
					</Menu.Target>

					<Menu.Dropdown>
						<Flex direction='column'>
							<Menu.Item icon={<IconUpload size={rem(16)} />}>
								<FileButton onChange={setFile} accept='image/png,image/jpeg'>
									{props => (
										<UnstyledButton style={{ fontSize: '0.875rem' }} {...props}>
											Zmień avatar
										</UnstyledButton>
									)}
								</FileButton>
							</Menu.Item>
							<Menu.Item color='red' onClick={handleLogout} icon={<IconLogout size={rem(16)} />}>
								Wyloguj się
							</Menu.Item>
						</Flex>
					</Menu.Dropdown>
				</Menu>
			</div>
		</MantineProvider>
	)
}

export default UserPanel
