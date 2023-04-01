import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import {
	Container,
	Title,
	Text,
	Anchor,
	Paper,
	PasswordInput,
	Button,
	MantineProvider,
	Autocomplete,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18n';

const SignIn = () => {
	const { t } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { signIn } = UserAuth();

	const suggestedEmails =
		email.trim().length > 0 && !email.includes('@')
			? ['gmail.com', 'outlook.com', 'yahoo.com', 'wp.pl', 'o2.pl'].map(
					(provider) => `${email}@${provider}`
			  )
			: [];

	const invalidEmailError =
		error === 'Firebase: Error (auth/invalid-email).'
			? t('signInInvalidEmailError')
			: false;

	const userNotFoundError =
		error === 'Firebase: Error (auth/user-not-found).'
			? t('signInUserNotFoundError')
			: false;

	const passwordError =
		error === 'Firebase: Error (auth/wrong-password).'
			? t('signInPasswordError')
			: false;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			navigate('/kanban');
		} catch (e) {
			setError(e.message);
		}
	};
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<form onSubmit={handleSubmit}>
				<Container size={420} py={100}>
					<Title
						align='center'
						sx={(theme) => ({
							fontFamily: `Lato, ${theme.fontFamily}`,
							fontWeight: 700,
						})}
					>
						{t('loginPanelTitle')}
					</Title>
					<Text color='dimmed' size='sm' align='center' mt={5}>
						{t('noAccount')}{' '}
						<Link to='/signup'>
							<Anchor size='sm' component='button'>
								{t('createAccount')}
							</Anchor>
						</Link>
					</Text>
					<Paper withBorder shadow='md' p={30} mt={20} radius='md'>
						<Autocomplete
							value={email}
							onChange={(value) => {
								setError('');
								setEmail(value);
							}}
							label={t('email')}
							required
							placeholder={t('emailPlaceholder')}
							data={suggestedEmails}
							maxDropdownHeight={125}
							error={userNotFoundError || invalidEmailError}
						/>
						<PasswordInput
							label={t('password')}
							placeholder={t('passwordPlaceholder')}
							required
							mt='md'
							onChange={(e) => {
								setError('');
								setPassword(e.target.value);
							}}
							error={passwordError}
						/>
						<Button type='submit' fullWidth mt='xl'>
							{t('loginBtn')}
						</Button>
					</Paper>
				</Container>
			</form>
		</MantineProvider>
	);
};

export default SignIn;
