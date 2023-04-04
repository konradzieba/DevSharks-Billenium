import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
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
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18n';

const avatarColors = ['yellowgreen', 'royalblue', 'lime', 'orange', 'tomato'];

const SignUp = () => {
	const { t } = useTranslation();

	const form = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			password2: '',
		},
		validate: (values) => ({
			firstName: values.firstName.trim().length < 2 && t('signUpFirstNameError'),
			lastName: values.lastName.trim().length < 2 && t('signUpLastNameError'),

			email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
				? null
				: t('signUpEmailError'),

			password: values.password.trim().length < 6 && t('signUpPasswordError'),
			password2:
				values.password2 === values.password ? null : t('signUpPassword2Error'),
		}),
	});

	const navigate = useNavigate();
	const { createUser } = UserAuth();

	const suggestedEmails =
		form.values.email.trim().length > 0 && !form.values.email.includes('@')
			? ['gmail.com', 'outlook.com', 'yahoo.com', 'wp.pl', 'o2.pl'].map(
					(provider) => `${form.values.email}@${provider}`
			  )
			: [];

	const handleSubmit = async (values) => {
		try {
			await createUser(form.values.email, form.values.password);
			await addDoc(collection(db, 'users'), {
				email: values.email,
				firstName: values.firstName,
				lastName: values.lastName,
				avatarUrl: '',
				avatarColor: avatarColors[Math.floor(Math.random() * avatarColors.length)],
			});
			navigate('/kanban');
		} catch (e) {
			e.message === 'Firebase: Error (auth/email-already-in-use).' &&
				form.setErrors({ email: t('signUpEmailExistsError') });
		}
	};

	return (
		<MantineProvider theme={{ colorScheme: 'dark' }}>
			<form
				onSubmit={form.onSubmit((values) => {
					form.setValues(values);
					handleSubmit(values);
				})}
			>
				<Container size={420} py={100}>
					<Title
						align='center'
						sx={(theme) => ({
							fontFamily: `Lato, ${theme.fontFamily}`,
							fontWeight: 700,
						})}
					>
						{t('registerPanelTitle')}
					</Title>
					<Text color='dimmed' size='sm' align='center' mt={5}>
						{t('gotAccount')}{' '}
						<Link to='/'>
							<Anchor size='sm' component='button'>
								{t('signIn')}
							</Anchor>
						</Link>
					</Text>
					<Paper withBorder shadow='md' p={30} mt={20} radius='md'>
						<TextInput
							label={t('firstName')}
							placeholder={t('firstNamePlaceholder')}
							required
							mt='md'
							{...form.getInputProps('firstName')}
						/>
						<TextInput
							label={t('lastName')}
							placeholder={t('lastNamePlaceholder')}
							required
							mt='md'
							{...form.getInputProps('lastName')}
						/>
						<Autocomplete
							label={t('email')}
							placeholder={t('emailPlaceholder')}
							mt='md'
							required
							data={suggestedEmails}
							maxDropdownHeight={125}
							{...form.getInputProps('email')}
						/>
						<PasswordInput
							label={t('password')}
							placeholder={t('passwordPlaceholder')}
							required
							mt='md'
							onChange={(e) => {}}
							{...form.getInputProps('password')}
						/>
						<PasswordInput
							label={t('passwordConfirm')}
							placeholder={t('passwordConfirmPlaceholder')}
							required
							mt='md'
							onChange={(e) => {}}
							{...form.getInputProps('password2')}
						/>
						<Button type='submit' fullWidth mt='xl'>
							{t('registerBtn')}
						</Button>
					</Paper>
				</Container>
			</form>
		</MantineProvider>
	);
};

export default SignUp;
