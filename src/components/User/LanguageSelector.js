import { useState } from 'react';
import {
	Menu,
	Text,
	MantineProvider,
	Flex,
	UnstyledButton,
	rem,
} from '@mantine/core';
import i18n from '../../translations/i18n';
import ReactCountryFlag from 'react-country-flag';

const LanguageSelector = ({ className, style }) => {
	const [language, setLanguage] = useState(i18n.language);
	const langName =
		i18n.language === 'en' ? 'GB' : i18n.language === 'zh' ? 'CN' : i18n.language;

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	// console.log(i18n.language);
	// console.log(i18n.languages[i18n.language]);
	return (
		<MantineProvider theme={{ colorScheme: 'dark', fontFamily: 'Lato' }}>
			<div className={className} style={style}>
				<Menu>
					<Menu.Target>
						<UnstyledButton
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<ReactCountryFlag
								style={{
									width: rem(45),
									height: rem(30),
									// border: '2px solid pink',
								}}
								countryCode={langName}
								svg
							/>
						</UnstyledButton>
					</Menu.Target>

					<Menu.Dropdown>
						<Flex direction='column'>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='GB' svg />}
								onClick={() => {
									changeLanguage('en');
									setLanguage('English');
								}}
							>
								<Text>English</Text>
							</Menu.Item>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='PL' svg />}
								onClick={() => {
									changeLanguage('pl');
									setLanguage('Polish');
								}}
							>
								<Text>Polish</Text>
							</Menu.Item>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='ES' svg />}
								onClick={() => {
									changeLanguage('es');
									setLanguage('Spanish');
								}}
							>
								<Text>Spanish</Text>
							</Menu.Item>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='FR' svg />}
								onClick={() => {
									changeLanguage('fr');
									setLanguage('French');
								}}
							>
								<Text>French</Text>
							</Menu.Item>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='UA' svg />}
								onClick={() => {
									changeLanguage('ua');
									setLanguage('Ukrainian');
								}}
							>
								<Text>Ukrainian</Text>
							</Menu.Item>
							<Menu.Item
								icon={<ReactCountryFlag countryCode='CN' svg />}
								onClick={() => {
									changeLanguage('zh');
									setLanguage('Chinese');
								}}
							>
								<Text>Chinese</Text>
							</Menu.Item>
						</Flex>
					</Menu.Dropdown>
				</Menu>
			</div>
		</MantineProvider>
	);
};

export default LanguageSelector;
