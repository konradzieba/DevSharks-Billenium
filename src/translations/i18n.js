import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			// Kanban
			kanbanTitle: 'Interactive Kanban Board',
			addGroup: 'Add group',
			addTask: 'Add task',
			addColumn: 'Add column',
			usersList: 'Users:',
			noLimit: 'No limit',
			limit: 'Limit',
			// User panel
			changeAvatar: 'Change avatar',
			logout: 'Logout',
			// Sign Up and Sign In
			registerPanelTitle: 'Register',
			loginPanelTitle: 'Login',
			gotAccount: 'Already have an account?',
			createAccount: 'Sign up',
			noAccount: "Don't have an account?",
			signIn: 'Sign in',
			firstName: 'First name',
			firstNamePlaceholder: 'Enter your first name',
			lastName: 'Last name',
			lastNamePlaceholder: 'Enter your last name',
			email: 'Email',
			emailPlaceholder: 'Enter your email',
			password: 'Password',
			passwordPlaceholder: 'Enter your password',
			passwordConfirm: 'Confirm password',
			passwordConfirmPlaceholder: 'Confirm your password',
			registerBtn: 'Register',
			loginBtn: 'Login',
			signInPasswordError: 'Invalid password',
			signInInvalidEmailError: 'Invalid email',
			signInUserNotFoundError: 'User with this email does not exist',
			//stricte signup
			signUpFirstNameError: 'First name must contain at least 2 characters',
			signUpLastNameError: 'Last name must contain at least 2 characters',
			signUpEmailError: 'Invalid email',
			signUpPasswordError: 'Password must contain at least 6 characters',
			signUpPassword2Error: 'Passwords do not match',
			signUpEmailExistsError: 'User with this email already exists',
			// add group modal
			addGroupModalTitle: 'Add new group',
			addGroupModalInputLabel: 'New group name:',
			addGroupModalExistsError:
				'Group with this name already exists. Choose another name.',
			addGroupModalBtn: 'Add group',
			// asign user modal
			assignUserModalNoAssign: 'No assign',
			assignUserModalTitle: 'Assign user to task',
			assignUserModalPlaceholder: 'No assign',
			assignUserModalSelectLabel: 'Select user',
			assignUserModalNothingFound: 'No users to assign',
			assignUserModalBtn: 'Assign',
			// delete card modal
			deleteCardModalTitle: 'Are you sure you want to delete this task?',
			deleteCardModalCancelBtn: 'Cancel',
			deleteCardModalDeleteBtn: 'Delete',
			// delete group modal
			deleteGroupModalTitle: 'Are you sure you want to delete this group?',
			deleteGroupModalCancelBtn: 'Cancel',
			deleteGroupModalDeleteBtn: 'Delete',
			// delete list modal
			deleteListModalTitle: 'Are you sure you want to delete this column?',
			deleteListModalCancelBtn: 'Cancel',
			deleteListModalDeleteBtn: 'Delete',
			// rename card modal
			renameCardModalTitle: 'Rename task',
			renameCardModalInputLabel: 'New task name:',
			renameCardModalInvalidInputError: 'Check validity of the task name',
			renameCardModalSelectColor: 'Select color:',
			renameCardModalBtn: 'Rename task',
			// rename list modal
			renameListModalTitle: 'Rename column',
			renameListModalInputLabel: 'New column name:',
			renameListModalInvalidInputError: 'Check validity of the column name',
			renameListModalBtn: 'Rename column',
			// rename group modal
			renameGroupModalTitle: 'Rename group',
			renameGroupModalInputLabel: 'New group name:',
			renameGroupModalExistsError:
				'Group with this name already exists. Choose another name.',
			renameGroupModalBtn: 'Rename group',
			// updateListLimit modal
			updateListLimitModalInfo: 'By entering a limit of 0 you set no limit.',
			updateListLimitModalTitle: 'Update column limit',
			updateListLimitModalInputLabel: 'New limit:',
			updateListLimitModalPlaceholder: 'Enter new limit',
			updateListLimitModalBtn: 'Update limit',
		},
	},
	pl: {
		translation: {
			// Kanban
			kanbanTitle: 'Interaktywna tablica Kanban',
			addGroup: 'Dodaj grupę',
			addTask: 'Dodaj zadanie',
			addColumn: 'Dodaj kolumnę',
			usersList: 'Użytkownicy:',
			noLimit: 'Brak limitu',
			limit: 'Limit',
			// User panel
			changeAvatar: 'Zmień avatar',
			logout: 'Wyloguj się',
			// Sign Up and Sign In
			registerPanelTitle: 'Zarejestruj się',
			loginPanelTitle: 'Zaloguj się',
			gotAccount: 'Masz już konto?',
			createAccount: 'Zarejestruj się',
			noAccount: 'Nie masz konta?',
			signIn: 'Zaloguj się',
			firstName: 'Imię',
			firstNamePlaceholder: 'Wpisz swoje imię',
			lastName: 'Nazwisko',
			lastNamePlaceholder: 'Wpisz swoje nazwisko',
			email: 'Email',
			emailPlaceholder: 'Wpisz swój email',
			password: 'Hasło',
			passwordPlaceholder: 'Wpisz swoje hasło',
			passwordConfirm: 'Potwierdź hasło',
			passwordConfirmPlaceholder: 'Potwierdź swoje hasło',
			registerBtn: 'Zarejestruj się',
			loginBtn: 'Zaloguj się',
			signInPasswordError: 'Nieprawidłowe hasło',
			signInInvalidEmailError: 'Nieprawidłowy email',
			signInUserNotFoundError: 'Użytkownik z tym emailem nie istnieje',
			//stricte signup
			signUpFirstNameError: 'Imię musi zawierać przynajmniej 2 znaki',
			signUpLastNameError: 'Nazwisko musi zawierać przynajmniej 2 znaki',
			signUpEmailError: 'Nieprawidłowy email',
			signUpPasswordError: 'Hasło musi zawierać przynajmniej 6 znaków',
			signUpPassword2Error: 'Hasła nie są takie same',
			signUpEmailExistsError: 'Użytkownik z tym emailem już istnieje',
			// add group modal
			addGroupModalTitle: 'Dodaj nową grupę',
			addGroupModalInputLabel: 'Nazwa nowej grupy:',
			addGroupModalExistsError:
				'Grupa o tej nazwie już istnieje. Wybierz inną nazwę.',
			addGroupModalBtn: 'Dodaj grupę',
			// asign user modal
			assignUserModalNoAssign: 'Brak przypisania',
			assignUserModalTitle: 'Przypisz użytkownika do zadania',
			assignUserModalPlaceholder: 'Brak przypisania',
			assignUserModalSelectLabel: 'Wybierz użytkownika',
			assignUserModalNothingFound: 'Brak użytkowników do przypisania',
			assignUserModalBtn: 'Przypisz',
			// delete card modal
			deleteCardModalTitle: 'Czy na pewno chcesz usunąć to zadanie?',
			deleteCardModalCancelBtn: 'Anuluj',
			deleteCardModalDeleteBtn: 'Usuń',
			// delete group modal
			deleteGroupModalTitle: 'Czy na pewno chcesz usunąć tę grupę?',
			deleteGroupModalCancelBtn: 'Anuluj',
			deleteGroupModalDeleteBtn: 'Usuń',
			// delete list modal
			deleteListModalTitle: 'Czy na pewno chcesz usunąć tę kolumnę?',
			deleteListModalCancelBtn: 'Anuluj',
			deleteListModalDeleteBtn: 'Usuń',
			// rename card modal
			renameCardModalTitle: 'Zmień nazwę zadania',
			renameCardModalInputLabel: 'Nowa nazwa zadania:',
			renameCardModalInvalidInputError: 'Sprawdź poprawność nazwy zadania',
			renameCardModalSelectColor: 'Wybierz kolor:',
			renameCardModalBtn: 'Zmień nazwę',
			// rename list modal
			renameListModalTitle: 'Zmień nazwę kolumny',
			renameListModalInputLabel: 'Nowa nazwa kolumny:',
			renameListModalInvalidInputError: 'Sprawdź poprawność nazwy kolumny',
			renameListModalBtn: 'Zmień nazwę',
			// rename group modal
			renameGroupModalTitle: 'Zmień nazwę grupy',
			renameGroupModalInputLabel: 'Nowa nazwa grupy:',
			renameGroupModalExistsError:
				'Grupa o tej nazwie już istnieje. Wybierz inną nazwę.',
			renameGroupModalBtn: 'Zmień nazwę',
			// updateListLimit modal
			updateListLimitModalInfo: 'Ustaw limit dla kolumny',
			updateListLimitModalTitle: 'Ustaw limit',
			updateListLimitModalInputLabel: 'Nowy limit:',
			updateListLimitModalPlaceholder: 'Wprawdź nowy limit',
			updateListLimitModalBtn: 'Zmień limit',
		},
	},
	es: {
		translation: {
			// Kanban
			kanbanTitle: 'Tablero Kanban interactivo',
			addGroup: 'Añadir grupo',
			addTask: 'Añadir tarea',
			addColumn: 'Añadir columna',
			usersList: 'Lista de usuarios:',
			noLimit: 'Sin límite',
			limit: 'Límite',
			// User panel
			changeAvatar: 'Cambiar avatar',
			logout: 'Cerrar sesión',
			// Sign Up and Sign In
			registerPanelTitle: 'Registrarse',
			loginPanelTitle: 'Iniciar sesión',
			gotAccount: '¿Ya tienes una cuenta?',
			createAccount: 'Crear cuenta',
			noAccount: '¿No tienes una cuenta?',
			signIn: 'Iniciar sesión',
			firstName: 'Nombre',
			firstNamePlaceholder: 'Escribe tu nombre',
			lastName: 'Apellido',
			lastNamePlaceholder: 'Escribe tu apellido',
			email: 'Email',
			emailPlaceholder: 'Escribe tu email',
			password: 'Contraseña',
			passwordPlaceholder: 'Escribe tu contraseña',
			passwordConfirm: 'Confirmar contraseña',
			passwordConfirmPlaceholder: 'Confirma tu contraseña',
			registerBtn: 'Registrarse',
			loginBtn: 'Iniciar sesión',
			signInPasswordError: 'Contraseña incorrecta',
			signInInvalidEmailError: 'Email incorrecto',
			signInUserNotFoundError: 'Usuario con este email no existe',
			//stricte signup
			signUpFirstNameError: 'Nombre debe tener al menos 2 caracteres',
			signUpLastNameError: 'Apellido debe tener al menos 2 caracteres',
			signUpEmailError: 'Email incorrecto',
			signUpPasswordError: 'Contraseña debe tener al menos 6 caracteres',
			signUpPassword2Error: 'Contraseñas no coinciden',
			signUpEmailExistsError: 'Usuario con este email ya existe',
			// add group modal
			addGroupModalTitle: 'Añadir nuevo grupo',
			addGroupModalInputLabel: 'Nombre del nuevo grupo:',
			addGroupModalExistsError:
				'Grupo con este nombre ya existe. Elige otro nombre.',
			addGroupModalBtn: 'Añadir grupo',
			// asign user modal
			assignUserModalNoAssign: 'Sin asignar',
			assignUserModalTitle: 'Asignar usuario a la tarea',
			assignUserModalPlaceholder: 'Sin asignar',
			assignUserModalSelectLabel: 'Seleccionar usuario',
			assignUserModalNothingFound: 'No hay usuarios para asignar',
			assignUserModalBtn: 'Asignar',
			// delete card modal
			deleteCardModalTitle: '¿Estás seguro de que quieres eliminar esta tarea?',
			deleteCardModalCancelBtn: 'Cancelar',
			deleteCardModalDeleteBtn: 'Eliminar',
			// delete group modal
			deleteGroupModalTitle: '¿Estás seguro de que quieres eliminar este grupo?',
			deleteGroupModalCancelBtn: 'Cancelar',
			deleteGroupModalDeleteBtn: 'Eliminar',
			// delete list modal
			deleteListModalTitle: '¿Estás seguro de que quieres eliminar esta columna?',
			deleteListModalCancelBtn: 'Cancelar',
			deleteListModalDeleteBtn: 'Eliminar',
			// rename card modal
			renameCardModalTitle: 'Cambiar nombre de la tarea',
			renameCardModalInputLabel: 'Nuevo nombre de la tarea:',
			renameCardModalInvalidInputError: 'Comprueba el nombre de la tarea',
			renameCardModalSelectColor: 'Seleccionar color:',
			renameCardModalBtn: 'Cambiar nombre',
			// rename list modal
			renameListModalTitle: 'Cambiar nombre de la columna',
			renameListModalInputLabel: 'Nuevo nombre de la columna:',
			renameListModalInvalidInputError: 'Comprueba el nombre de la columna',
			renameListModalBtn: 'Cambiar nombre',
			// rename group modal
			renameGroupModalTitle: 'Cambiar nombre del grupo',
			renameGroupModalInputLabel: 'Nuevo nombre del grupo:',
			renameGroupModalExistsError:
				'Grupo con este nombre ya existe. Elige otro nombre.',
			renameGroupModalBtn: 'Cambiar nombre',
			// updateListLimit modal
			updateListLimitModalInfo: 'Establecer límite para la columna',
			updateListLimitModalTitle: 'Establecer límite',
			updateListLimitModalInputLabel: 'Nuevo límite:',
			updateListLimitModalPlaceholder: 'Escribe nuevo límite',
			updateListLimitModalBtn: 'Cambiar límite',
		},
	},
	fr: {
		translation: {
			// Kanban
			kanbanTitle: 'Tableau Kanban interactif',
			addGroup: 'Ajouter un groupe',
			addTask: 'Ajouter une tâche',
			addColumn: 'Ajouter une colonne',
			usersList: 'Liste des utilisateurs:',
			noLimit: 'Pas de limite',
			limit: 'Limite',
			// User panel
			changeAvatar: "Changer l'avatar",
			logout: 'Se déconnecter',
			// Sign Up and Sign In
			registerPanelTitle: "S'inscrire",
			loginPanelTitle: 'Se connecter',
			gotAccount: 'Vous avez déjà un compte ?',
			createAccount: 'Créer un compte',
			noAccount: "Vous n'avez pas de compte ?",
			signIn: 'Se connecter',
			firstName: 'Prénom',
			firstNamePlaceholder: 'Entrez votre prénom',
			lastName: 'Nom',
			lastNamePlaceholder: 'Entrez votre nom',
			email: 'Email',
			emailPlaceholder: 'Entrez votre email',
			password: 'Mot de passe',
			passwordPlaceholder: 'Entrez votre mot de passe',
			passwordConfirmPlaceholder: 'Confirmez votre mot de passe',
			registerBtn: "S'inscrire",
			passwordConfirm: 'Confirmer le mot de passe',
			loginBtn: 'Se connecter',
			signInPasswordError: 'Mot de passe incorrect',
			signInInvalidEmailError: 'Email incorrect',
			signInUserNotFoundError: "Utilisateur avec cet email n'existe pas",
			//stricte signup
			signUpFirstNameError: 'Prénom doit contenir au moins 2 caractères',
			signUpLastNameError: 'Nom doit contenir au moins 2 caractères',
			signUpEmailError: 'Email incorrect',
			signUpPasswordError: 'Mot de passe doit contenir au moins 6 caractères',
			signUpEmailExistsError: 'Utilisateur avec cet email existe déjà',
			// add group modal
			addGroupModalTitle: 'Ajouter un nouveau groupe',
			signUpPassword2Error: 'Les mots de passe ne correspondent pas',
			addGroupModalInputLabel: 'Nom du nouveau groupe:',
			addGroupModalExistsError:
				'Groupe avec ce nom existe déjà. Choisissez un autre nom.',
			addGroupModalBtn: 'Ajouter groupe',
			// asign user modal
			assignUserModalNoAssign: 'Non assigné',
			assignUserModalTitle: 'Assigner un utilisateur à la tâche',
			assignUserModalPlaceholder: 'Non assigné',
			assignUserModalSelectLabel: 'Sélectionner un utilisateur',
			assignUserModalNothingFound: 'Aucun utilisateur à assigner',
			assignUserModalBtn: 'Assigner',
			// delete card modal
			deleteCardModalTitle: 'Êtes-vous sûr de vouloir supprimer cette tâche?',
			deleteCardModalCancelBtn: 'Annuler',
			deleteCardModalDeleteBtn: 'Supprimer',
			// delete group modal
			deleteGroupModalTitle: 'Êtes-vous sûr de vouloir supprimer ce groupe?',
			deleteGroupModalCancelBtn: 'Annuler',
			deleteGroupModalDeleteBtn: 'Supprimer',
			// delete list modal
			deleteListModalTitle: 'Êtes-vous sûr de vouloir supprimer cette colonne?',
			deleteListModalCancelBtn: 'Annuler',
			deleteListModalDeleteBtn: 'Supprimer',
			// rename card modal
			renameCardModalTitle: 'Renommer la tâche',
			renameCardModalInputLabel: 'Nouveau nom de la tâche:',
			renameCardModalInvalidInputError: 'Vérifiez la validité du nom de la tâche',
			renameCardModalSelectColor: 'Choisir une couleur:',
			renameCardModalBtn: 'Renommer',
			// rename list modal
			renameListModalTitle: 'Renommer la colonne',
			renameListModalInputLabel: 'Nouveau nom de la colonne:',
			renameListModalInvalidInputError:
				'Vérifiez la validité du nom de la colonne',
			renameListModalBtn: 'Renommer',
			// rename group modal
			renameGroupModalTitle: 'Renommer le groupe',
			renameGroupModalInputLabel: 'Nouveau nom du groupe:',
			renameGroupModalExistsError:
				'Groupe avec ce nom existe déjà. Choisissez un autre nom.',
			renameGroupModalBtn: 'Renommer',
			// updateListLimit modal
			updateListLimitModalInfo: 'Définir une limite pour la colonne',
			updateListLimitModalTitle: 'Définir une limite',
			updateListLimitModalInputLabel: 'Nouvelle limite:',
			updateListLimitModalPlaceholder: 'Entrez une nouvelle limite',
			updateListLimitModalBtn: 'Définir une limite',
		},
	},
	ua: {
		translation: {
			// Kanban
			kanbanTitle: 'Інтерактивна доска Kanban',
			addGroup: 'Додати групу',
			addTask: 'Додати завдання',
			addColumn: 'Додати колонку',
			usersList: 'Список користувачів:',
			noLimit: 'Без обмежень',
			limit: 'Обмеження',
			// User panel
			changeAvatar: 'Змінити аватар',
			logout: 'Вийти',
			// Sign Up and Sign In
			registerPanelTitle: 'Зареєструватися',
			loginPanelTitle: 'Увійти',
			gotAccount: 'Вже маєте акаунт?',
			createAccount: 'Створити акаунт',
			noAccount: 'Немає акаунту?',
			signIn: 'Увійти',
			firstName: "Ім'я",
			firstNamePlaceholder: 'Введіть ваше ім`я',
			lastName: 'Прізвище',
			lastNamePlaceholder: 'Введіть ваше прізвище',
			email: 'Email',
			emailPlaceholder: 'Введіть ваш email',
			password: 'Пароль',
			passwordPlaceholder: 'Введіть ваш пароль',
			passwordConfirm: 'Підтвердіть пароль',
			passwordConfirmPlaceholder: 'Підтвердіть ваш пароль',
			registerBtn: 'Зареєструватися',
			loginBtn: 'Увійти',
			signInPasswordError: 'Пароль повинен містити не менше 6 символів',
			signInInvalidEmailError: 'Невірний email',
			signInUserNotFoundError: 'Користувача з таким email не знайдено',
			//stricte signup
			signUpFirstNameError: "Ім'я повинно містити не менше 2 символів",
			signUpLastNameError: 'Прізвище повинно містити не менше 2 символів',
			signUpEmailError: 'Невірний email',
			signUpPasswordError: 'Пароль повинен містити не менше 6 символів',
			signUpPassword2Error: 'Паролі не співпадають',
			signUpEmailExistsError: 'Користувач з таким email вже існує',
			// add group modal
			addGroupModalTitle: 'Додати групу',
			addGroupModalInputLabel: 'Назва групи:',
			addGroupModalExistsError:
				'Група з такою назвою вже існує. Виберіть іншу назву.',
			addGroupModalBtn: 'Додати групу',
			// asign user modal
			assignUserModalNoAssign: 'Немає',
			assignUserModalTitle: 'Призначити користувача',
			assignUserModalPlaceholder: 'Пошук користувача',
			assignUserModalSelectLabel: 'Призначити користувача:',
			assignUserModalNothingFound: 'Нічого не знайдено',
			assignUserModalBtn: 'Призначити',
			// delete card modal
			deleteCardModalTitle: 'Ви впевнені, що хочете видалити цю задачу?',
			deleteCardModalCancelBtn: 'Скасувати',
			deleteCardModalDeleteBtn: 'Видалити',
			// delete group modal
			deleteGroupModalTitle: 'Ви впевнені, що хочете видалити цю групу?',
			deleteGroupModalCancelBtn: 'Скасувати',
			deleteGroupModalDeleteBtn: 'Видалити',
			// delete list modal
			deleteListModalTitle: 'Ви впевнені, що хочете видалити цю колонку?',
			deleteListModalCancelBtn: 'Скасувати',
			deleteListModalDeleteBtn: 'Видалити',
			// rename card modal
			renameCardModalTitle: 'Перейменувати задачу',
			renameCardModalInputLabel: 'Нова назва задачі:',
			renameCardModalInvalidInputError: 'Перевірте правильність назви задачі',
			renameCardModalSelectColor: 'Виберіть колір',
			renameCardModalBtn: 'Перейменувати задачу',
			// rename list modal
			renameListModalTitle: 'Перейменувати колонку',
			renameListModalInputLabel: 'Нова назва колонки:',
			renameListModalInvalidInputError: 'Перевірте правильність назви колонки',
			renameListModalBtn: 'Перейменувати колонку',
			// rename group modal
			renameGroupModalTitle: 'Перейменувати групу',
			renameGroupModalInputLabel: 'Нова назва групи:',
			renameGroupModalExistsError:
				'Група з такою назвою вже існує. Виберіть іншу назву.',
			renameGroupModalBtn: 'Перейменувати групу',
			// updateListLimit modal
			updateListLimitModalInfo: 'Встановіть ліміт для колонки',
			updateListLimitModalTitle: 'Встановити ліміт',
			updateListLimitModalInputLabel: 'Новий ліміт:',
			updateListLimitModalPlaceholder: 'Введіть ліміт',
			updateListLimitModalBtn: 'Встановити ліміт',
		},
	},
	zh: {
		translation: {
			// Kanban
			kanbanTitle: '看板',
			addGroup: '添加分组',
			addTask: '添加任务',
			addColumn: '添加列',
			usersList: '用户列表:',
			noLimit: '无限制',
			limit: '限制',
			// User panel
			changeAvatar: '更改头像',
			logout: '退出',
			// Sign Up and Sign In
			registerPanelTitle: '注册',
			loginPanelTitle: '登录',
			gotAccount: '已有账号？',
			createAccount: '创建账号',
			noAccount: '没有账号？',
			signIn: '登录',
			firstName: '名字',
			firstNamePlaceholder: '输入您的名字',
			lastName: '姓氏',
			lastNamePlaceholder: '输入您的姓氏',
			email: '邮箱',
			emailPlaceholder: '输入您的邮箱',
			password: '密码',
			passwordPlaceholder: '输入您的密码',
			passwordConfirm: '确认密码',
			passwordConfirmPlaceholder: '确认您的密码',
			registerBtn: '注册',
			loginBtn: '登录',
			signInPasswordError: '密码必须包含至少6个字符',
			signInInvalidEmailError: '无效的邮箱',
			signInUserNotFoundError: '用户不存在',
			//stricte signup
			signUpFirstNameError: '名字必须包含至少2个字符',
			signUpLastNameError: '姓氏必须包含至少2个字符',
			signUpEmailError: '无效的邮箱',
			signUpPasswordError: '密码必须包含至少6个字符',
			signUpPassword2Error: '密码必须包含至少6个字符',
			signUpEmailExistsError: '邮箱已被注册',
			// add group modal
			addGroupModalTitle: '添加分组',
			addGroupModalInputLabel: '分组名称:',
			addGroupModalExistsError: '分组名称已存在。 请使用其他名称。',
			addGroupModalBtn: '添加分组',
			// asign user modal
			assignUserModalNoAssign: '未分配',
			assignUserModalTitle: '分配用户',
			assignUserModalPlaceholder: '输入用户名',
			assignUserModalSelectLabel: '选择用户',
			assignUserModalNothingFound: '没有找到用户',
			assignUserModalBtn: '分配用户',
			// delete card modal
			deleteCardModalTitle: '您确定要删除此任务吗？',
			deleteCardModalCancelBtn: '取消',
			deleteCardModalDeleteBtn: '删除',
			// delete group modal
			deleteGroupModalTitle: '您确定要删除此组吗？',
			deleteGroupModalCancelBtn: '取消',
			deleteGroupModalDeleteBtn: '删除',
			// delete list modal
			deleteListModalTitle: '您确定要删除此列吗？',
			deleteListModalCancelBtn: '取消',
			deleteListModalDeleteBtn: '删除',
			// rename card modal
			renameCardModalTitle: '重命名任务',
			renameCardModalInputLabel: '新任务名称:',
			renameCardModalInvalidInputError: '检查任务名称的有效性',
			renameCardModalSelectColor: '选择颜色',
			renameCardModalBtn: '重命名任务',
			// rename list modal
			renameListModalTitle: '重命名列',
			renameListModalInputLabel: '新列名称:',
			renameListModalInvalidInputError: '检查列名称的有效性',
			renameListModalBtn: '重命名列',
			// rename group modal
			renameGroupModalTitle: '重命名组',
			renameGroupModalInputLabel: '新组名称:',
			renameGroupModalExistsError: '组名称已存在。 请使用其他名称。',
			renameGroupModalBtn: '重命名组',
			// updateListLimit modal
			updateListLimitModalInfo: '设置列的限制',
			updateListLimitModalTitle: '设置限制',
			updateListLimitModalInputLabel: '新限制:',
			updateListLimitModalPlaceholder: '输入限制',
			updateListLimitModalBtn: '设置限制',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;