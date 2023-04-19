import { useEffect } from 'react';
import Avatar from './Avatar';
import { Menu, rem, MantineProvider, Flex, FileButton, Text } from '@mantine/core';
import { IconUpload, IconLogout } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const UserPanel = ({ loggedUserInfo, handleLogout, uploadUserAvatar, setFile, file }) => {
	useEffect(() => {
		if (file && loggedUserInfo.id) {
			uploadUserAvatar(loggedUserInfo.id);
		}
	}, [file, loggedUserInfo.id]);

	const { t } = useTranslation();

	return (
		<MantineProvider theme={{ colorScheme: 'dark', fontFamily: 'Lato' }}>
			<div>
				<Menu closeOnItemClick={false}>
					<Menu.Target>
						<button className='user-menu-conainer'>
							<Avatar
								firstName={loggedUserInfo.firstName}
								lastName={loggedUserInfo.lastName}
								avatarColor={loggedUserInfo.avatarColor}
								enabledTooltip={false}
								avatarUrl={loggedUserInfo.avatarUrl}
								showAssigneds={false}
							/>
							<div className='user-menu-info'>
								<Text fz={16} fw={500}>
									{loggedUserInfo.firstName} {loggedUserInfo.lastName}
								</Text>
								<Text fz={12} fw={200} mt={-2}>
									{loggedUserInfo.email}
								</Text>
							</div>
						</button>
					</Menu.Target>

					<Menu.Dropdown>
						<Flex direction='column'>
							<FileButton onChange={setFile} accept='image/png,image/jpeg'>
								{props => (
									<Menu.Item className='user-menu-upload-avatar-btn' {...props} icon={<IconUpload size={rem(16)} />}>
										{t('changeAvatar')}
									</Menu.Item>
								)}
							</FileButton>
							<Menu.Item color='red' onClick={handleLogout} icon={<IconLogout size={rem(16)} />}>
								{t('logout')}
							</Menu.Item>
						</Flex>
					</Menu.Dropdown>
				</Menu>
			</div>
		</MantineProvider>
	);
};

export default UserPanel;
