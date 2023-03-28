import Avatar from './Avatar';
import { useState } from 'react';
import {
	Menu,
	UnstyledButton,
	rem,
	MantineProvider,
	Flex,
} from '@mantine/core';
import { FileButton } from '@mantine/core';
import { IconUpload, IconLogout } from '@tabler/icons-react';

const UserPanel = ({ loggedUserInfo, handleLogout }) => {
	const [file, setFile] = useState(null);
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<div
				style={{
					border: '4px solid #ccc',
					borderRadius: '50%',
					cursor: 'pointer',
				}}
				// onClick={() => {
				// 	console.log('hejka');
				// }}
			>
				<Menu>
					<Menu.Target>
						<button
							style={{ borderRadius: '50%', border: 'none', cursor: 'pointer' }}
						>
							<Avatar
								firstName={loggedUserInfo.firstName}
								lastName={loggedUserInfo.lastName}
								avatarColor={loggedUserInfo.avatarColor}
								enabledTooltip={false}
							/>
						</button>
					</Menu.Target>

					<Menu.Dropdown>
						<Flex direction='column'>
							<Menu.Item icon={<IconUpload size={rem(16)} />}>
								<FileButton onChange={setFile} accept='image/png,image/jpeg'>
									{(props) => (
										<UnstyledButton style={{ fontSize: '0.875rem' }} {...props}>
											Aktualizuj avatar
										</UnstyledButton>
									)}
								</FileButton>
							</Menu.Item>
							<Menu.Item
								color='red'
								onClick={handleLogout}
								icon={<IconLogout size={rem(16)} />}
							>
								Wyloguj się
							</Menu.Item>

							{/* Other items ... */}
						</Flex>
					</Menu.Dropdown>
				</Menu>
			</div>
		</MantineProvider>
	);
};

export default UserPanel;
