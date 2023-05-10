import ReactMarkdown from 'react-markdown';
import Navbar from '../Navbar/Navbar';
import './styles.scss';
import Logowanie from './media/Logowanie.gif';
import Podzadania from './media/Podzadania.gif';
import PrzypisanieUzytkownikow from './media/Przypisywanie_uzytkownikow.gif';
import Rejestracja from './media/Rejestracja.gif';
import StatusZbugowane from './media/Status_zbugowane.gif';
import TworzenieKolumny from './media/Tworzenie_kolumny.gif';
import TworzenieGrupy from './media/Tworznie_grupy.gif';
import TworzenieZadania from './media/Tworznie_zadania.gif';
import Usuwanie from './media/Usuwanie.gif';
import ZmianaAvatara from './media/Zmiana_avatara.gif';
import ZamianaJezyka from './media/Zmiana_jezyka.gif';
import ZmianaKoloruZadania from './media/Zmiana_koloru_zadania.gif';
import ZmianaLimituDlaUzytkownika from './media/Zmiana_limitu_dla_uzytkownika.gif';
import ZmianaLimitu from './media/Zmiana_limitu.gif';
import ZmianaNazwyKolumny from './media/Zmiana_nazwy_kolumny.gif';
import ZmianaNazwyGrupy from './media/Zmiana_nazwy_grupy.gif';
import ZmianaNazwyZadania from './media/Zmiana_nazwy_zadania.gif';
import Rodzic_dziecko from './media/Rodzic_dziecko.gif';
import { useTranslation } from 'react-i18next';
import { AsideMenu } from './Aside';

const Doc = () => {
	const { t } = useTranslation();
	return (
		<div className='doc'>
			<AsideMenu />
			<div>
				<Navbar />
				<div className='doc-container'>
					<div id='DevSharks-Bilenium'>
						<ReactMarkdown>
							{`
# DevSharks - Billenium
${t('docTitleDescription')}
`}
						</ReactMarkdown>
					</div>
					<div id='Technologies'>
						<ReactMarkdown>{`## ${t('docTechnologies')}`}</ReactMarkdown>
					</div>
					<div id='Frontend'>
						<ReactMarkdown>
							{`### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
`}
						</ReactMarkdown>
					</div>
					<div id='Backend'>
						<ReactMarkdown>
							{`### Backend
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)`}
						</ReactMarkdown>
					</div>
					<div id='docTests'>
						<ReactMarkdown>
							{`### ${t('docTests')}
${t('docTestUnit')}
`}
						</ReactMarkdown>
						<ReactMarkdown>
							{`![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)`}
						</ReactMarkdown>
						<ReactMarkdown>
							{`
${t('docTestE2E')}
`}
						</ReactMarkdown>
						<ReactMarkdown>
							{`![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)`}
						</ReactMarkdown>
					</div>
					<div id='Deployment'>
						<ReactMarkdown>
							{`### Deployment
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)`}
						</ReactMarkdown>
					</div>
					<div id='Installation'>
						<ReactMarkdown>
							{`## ${t('docInstalation')}
${t('docinstalationDescription')}`}
						</ReactMarkdown>
					</div>
					<div id='Functionalities'>
						<ReactMarkdown>{`## ${t('docFunctionalities')} `}</ReactMarkdown>
					</div>
					<div id='LanguageChange'>
						<ReactMarkdown>{`### ${t('docLanguageChange')}
${t('docLanguageChangeDescription')}`}</ReactMarkdown>
						<img src={ZamianaJezyka} alt={t('docLanguageChange')} />
					</div>
					<div id='SignIn'>
						<ReactMarkdown>{`### ${t('docSignIn')}
${t('docSignInDescription')}`}</ReactMarkdown>
						<img src={Logowanie} alt={t('docSignIn')} />
					</div>
					<div id='SignUp'>
						<ReactMarkdown>{`### ${t('docSignUp')}
${t('docSignUpDescription')}`}</ReactMarkdown>
						<img src={Rejestracja} alt={t('docSignUp')} />
					</div>
					<div id='AssignAvatar'>
						<ReactMarkdown>{`### ${t('docAssignAvatar')}
${t('docAssignAvatarDescription')}`}</ReactMarkdown>
						<img src={ZmianaAvatara} alt={t('docAssignAvatar')} />
					</div>
					<div id='CreateColumn'>
						<ReactMarkdown>{`### ${t('docCreateColumn')}
${t('docCreateColumnDescription')}`}</ReactMarkdown>
						<img src={TworzenieKolumny} alt={t('docCreateColumn')} />
					</div>
					<div id='ChangeColumnName'>
						<ReactMarkdown>{`### ${t('docChangeColumnName')}
${t('docChangeColumnNameDescription')}`}</ReactMarkdown>
						<img src={ZmianaNazwyKolumny} alt={t('docChangeColumnName')} />
					</div>
					<div id='ChangeTaskLimitInColumn'>
						<ReactMarkdown>{`### ${t('docChangeTaskLimitInColumn')}
${t('docChangeTaskLimitInColumnDescription')}`}</ReactMarkdown>
						<img src={ZmianaLimitu} alt={t('docChangeTaskLimitInColumn')} />
					</div>
					<div id='CreateGroup'>
						<ReactMarkdown>{`### ${t('docCreateGroup')}
${t('docCreateGroupDescription')}`}</ReactMarkdown>
						<img src={TworzenieGrupy} alt={t('docCreateGroup')} />
					</div>
					<div id='ChangeGroupName'>
						<ReactMarkdown>{`### ${t('docChangeGroupName')}
${t('docChangeGroupNameDescription')}`}</ReactMarkdown>
						<img src={ZmianaNazwyGrupy} alt={t('docChangeGroupName')} />
					</div>
					<div id='CreateTask'>
						<ReactMarkdown>{`### ${t('docCreateTask')}
${t('docCreateTaskDescription')}`}</ReactMarkdown>
						<img src={TworzenieZadania} alt={t('docCreateTask')} />
					</div>
					<div id='ChangeTaskName'>
						<ReactMarkdown>{`### ${t('docChangeTaskName')}
${t('docChangeTaskNameDescription')}`}</ReactMarkdown>
						<img src={ZmianaNazwyZadania} alt={t('docChangeTaskName')} />
					</div>
					<div id='ChangeTaskColor'>
						<ReactMarkdown>{`### ${t('docChangeTaskColor')}
${t('docChangeTaskColorDescription')}`}</ReactMarkdown>
						<img src={ZmianaKoloruZadania} alt={t('docChangeTaskColor')} />
					</div>
					<div id='TaskBugStatus'>
						<ReactMarkdown>{`### ${t('docTaskBugStatus')}
${t('docTaskBugStatusDescription')}`}</ReactMarkdown>
						<img src={StatusZbugowane} alt={t('docTaskBugStatus')} />
					</div>
					<div id='Subtasks'>
						<ReactMarkdown>{`### ${t('docSubtasks')}
${t('docSubtasksDescription')}`}</ReactMarkdown>
						<img src={Podzadania} alt={t('docSubtasks')} />
					</div>
					<div id='AssignUserLimit'>
						<ReactMarkdown>{`### ${t('docAssignUserLimit')}
${t('docAssignUserLimitDescription')}`}</ReactMarkdown>
						<img src={ZmianaLimituDlaUzytkownika} alt={t('docAssignUserLimit')} />
					</div>
					<div id='AssignUserToTask'>
						<ReactMarkdown>{`### ${t('docAssignUserToTask')}
${t('docAssignUserToTaskDescription')}`}</ReactMarkdown>
						<img src={PrzypisanieUzytkownikow} alt={t('docAssignUserToTask')} />
					</div>
					<div id='ParentKidRelationship'>
						<ReactMarkdown>{`### ${t('docParentKidRelationship')}
${t('docParentKidRelationshipDescription')}`}</ReactMarkdown>
						<img src={Rodzic_dziecko} alt={t('docParentKidRelationship')} />
					</div>
					<div id='Delete'>
						<ReactMarkdown>{`### ${t('docDelete')}
${t('docDeleteDescription')}`}</ReactMarkdown>
						<img src={Usuwanie} alt={t('docDelete')} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Doc;
