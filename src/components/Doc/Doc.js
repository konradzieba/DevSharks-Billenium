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
import ZamianaJezyka from './media/Zmiana_jezyka.gif'
import ZmianaKoloruZadania from './media/Zmiana_koloru_zadania.gif';
import ZmianaLimituDlaUzytkownika from './media/Zmiana_limitu_dla_uzytkownika.gif';
import ZmianaLimitu from './media/Zmiana_limitu.gif';
import ZmianaNazwyKolumny from './media/Zmiana_nazwy_kolumny.gif';
import ZmianaNazwyGrupy from './media/Zmiana_nazwy_grupy.gif';
import ZmianaNazwyZadania from './media/Zmiana_nazwy_zadania.gif';
import { useTranslation } from 'react-i18next';

const Doc = () => {
	const { t } = useTranslation();
	return (
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
				<div id='Technoologie'>
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
				<div id='Testy'>
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
				<div id='Instalacja'>
					<ReactMarkdown>
						{`## ${t('docInstalation')}
${t('docinstalationDescription')}`}
					</ReactMarkdown>
				</div>
				<div id='Funkcjonalnosci'>
					<ReactMarkdown>{`## ${t('docFunctionalities')} `}</ReactMarkdown>
				</div>
				<div id='Zmiana-jezyka'>
					<ReactMarkdown>{`### ${t('docLanguageChange')}
${t('docLanguageChangeDescription')}`}</ReactMarkdown>
				<img src={ZamianaJezyka} alt='Zmiana języka' />
				</div>
				<div id='Logowanie'>
					<ReactMarkdown>{`### ${t('docSignIn')}
${t('docSignInDescription')}`}</ReactMarkdown>
					<img src={Logowanie} alt='Logowanie' />
				</div>
				<div id='Rejestracja'>
					<ReactMarkdown>{`### ${t('docSignUp')}
${t('docSignUpDescription')}`}</ReactMarkdown>
					<img src={Rejestracja} alt='Rejestracja' />
				</div>
				<div id='Przypisanie-zdjecia'>
					<ReactMarkdown>{`### ${t('docAssignAvatar')}
${t('docAssignAvatarDescription')}`}</ReactMarkdown>
					<img src={ZmianaAvatara} alt='Zmiana avatara' />
				</div>
				<div id='Tworzenie-kolumny'>
					<ReactMarkdown>{`### ${t('docCreateColumn')}
${t('docCreateColumnDescription')}`}</ReactMarkdown>
					<img src={TworzenieKolumny} alt='Tworzenie kolumny' />
				</div>
				<div id='Zmiana-nazwy-kolumny'>
					<ReactMarkdown>{`### ${t('docChangeColumnName')}
${t('docChangeColumnNameDescription')}`}</ReactMarkdown>
				<img src={ZmianaNazwyKolumny} alt='Zmiana nazwy kolumny' />
				</div>
				<div id='Zmiana-limitu-zadan-w-kolumnie'>
					<ReactMarkdown>{`### ${t('docChangeTaskLimitInColumn')}
${t('docChangeTaskLimitInColumnDescription')}`}</ReactMarkdown>
				<img src={ZmianaLimitu} alt='Zmiana limitu zadań'/>
				</div>
				<div id='Tworzenie-grupy'>
					<ReactMarkdown>{`### ${t('docCreateGroup')}
${t('docCreateGroupDescription')}`}</ReactMarkdown>
					<img src={TworzenieGrupy} alt='Tworzenie grupy' />
				</div>
				<div id='Zmiana-nazwy-grupy'>
					<ReactMarkdown>{`### ${t('docChangeGroupName')}
${t('docChangeGroupNameDescription')}`}</ReactMarkdown>
				<img src={ZmianaNazwyGrupy} alt='Zmiana nazwy grupy' />
				</div>
				<div id='Tworzenie-zadania'>
					<ReactMarkdown>{`### ${t('docCreateTask')}
${t('docCreateTaskDescription')}`}</ReactMarkdown>
					<img src={TworzenieZadania} alt='Tworzenie zadania' />
				</div>
				<div id='Zmiana-nazwy-zadania'>
					<ReactMarkdown>{`### ${t('docChangeTaskName')}
${t('docChangeTaskNameDescription')}`}</ReactMarkdown>
				<img src={ZmianaNazwyZadania} alt='Zmiana nazwy zadania' />
				</div>
				<div id='Zmiana-koloru-zadania'>
					<ReactMarkdown>{`### ${t('docChangeTaskColor')}
${t('docChangeTaskColorDescription')}`}</ReactMarkdown>
				<img src={ZmianaKoloruZadania} alt='Zmiana koloru zadania' />
				</div>
				<div id='Status-zbuowane'>
					<ReactMarkdown>{`### ${t('docTaskBugStatus')}
${t('docTaskBugStatusDescription')}`}</ReactMarkdown>
					<img src={StatusZbugowane} alt='Status zbugowane' />
				</div>
				<div id='Podzadania'>
					<ReactMarkdown>{`### ${t('docSubtasks')}
${t('docSubtasksDescription')}`}</ReactMarkdown>
					<img src={Podzadania} alt='Podzadania' />
				</div>
				<div id='Limit-uzytkownikow-mozliwych-do-przypisania'>
					<ReactMarkdown>{`### ${t('docAssignUserLimit')}
${t('docAssignUserLimitDescription')}`}</ReactMarkdown>
				<img src={ZmianaLimituDlaUzytkownika} alt='Zmiana limitu dla użytkownika' />
				</div>
				<div id='Przypisanie-uzytkownika-do-zadania'>
					<ReactMarkdown>{`### ${t('docAssignUserToTask')}
${t('docAssignUserToTaskDescription')}`}</ReactMarkdown>
					<img src={PrzypisanieUzytkownikow} alt='Przypisanie użytkowników' />
				</div>
				<div id='Usuwanie-grupy-kolumny-zadania'>
					<ReactMarkdown>{`### ${t('docDelete')}
${t('docDeleteDescription')}`}</ReactMarkdown>
					<img src={Usuwanie} alt='Usuwanie' />
				</div>
			</div>
		</div>
	);
};
export default Doc;