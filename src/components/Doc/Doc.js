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
Repozytorium zespołu DevSharks, storzone w celu realizacji projektu Interaktywnej tablicy Kanban.
`}
					</ReactMarkdown>
				</div>
				<div id='Technoologie'>
					<ReactMarkdown>{`## Technologie`}</ReactMarkdown>
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
						{`### Testy
Testy jednostkowe:
`}
					</ReactMarkdown>
					<ReactMarkdown>
						{`![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)`}
					</ReactMarkdown>
					<ReactMarkdown>
						{`
Testy e2e:
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
						{`## Instalacja
By uruchomić projekt lokalnie po instalacji środowiska [Node.js](https://nodejs.org/en), menadżera pakietów [Yarn](https://yarnpkg.com/getting-started/install) i pobraniu plików, znajdując się w folderze z plikami w terminalu inicjujemy komendy:
bash yarn install yarn start. Projekt uruchomi się pod adresem http://localhost:3000/`}
					</ReactMarkdown>
				</div>
				<div id='Funkcjonalnosci'>
					<ReactMarkdown>{`## Funkcjonalności `}</ReactMarkdown>
				</div>
				<div id='Zmiana-jezyka'>
					<ReactMarkdown>{`### Zmiana języka
Tablica kanban jest dostępna w 6 językach, które po wybraniu zapisują się w localstorage.`}</ReactMarkdown>
				<img src={ZamianaJezyka} alt='Zmiana języka' />
				</div>
				<div id='Logowanie'>
					<ReactMarkdown>{`### Logowanie
Logowanie się by uzyskać dostęp do tablicy kanban.`}</ReactMarkdown>
					<img src={Logowanie} alt='Logowanie' />
				</div>
				<div id='Rejestracja'>
					<ReactMarkdown>{`### Rejestracja
Zarejestorwanie się użytkownika by uzyskać dostęp do tablicy kanban, po prawidłowej rejestracji strona przekieruje do ekranu tablicy kanban.`}</ReactMarkdown>
					<img src={Rejestracja} alt='Rejestracja' />
				</div>
				<div id='Przypisanie-zdjecia'>
					<ReactMarkdown>{`### Przypisanie zdjęcia 
Przypisać zdjęcie możemy będąc zalogowanym użytkownikiem i w prawym roku wybieramy swoje zdjęcie i z menu rozwijanego wybieramy opcję **'Zmień avatar'**.`}</ReactMarkdown>
					<img src={ZmianaAvatara} alt='Zmiana avatara' />
				</div>
				<div id='Tworzenie-kolumny'>
					<ReactMarkdown>{`### Tworzenie kolumny
Nową kolumnę tworzymy przy przyciśnięciu przycisku **'Dodaj kolumnę'**.`}</ReactMarkdown>
					<img src={TworzenieKolumny} alt='Tworzenie kolumny' />
				</div>
				<div id='Zmiana-nazwy-kolumny'>
					<ReactMarkdown>{`### Zmiana nazwy kolumny
Nazwę kolumny zmieniamy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową nazwę.`}</ReactMarkdown>
				<img src={ZmianaNazwyKolumny} alt='Zmiana nazwy kolumny' />
				</div>
				<div id='Zmiana-limitu-zadan-w-kolumnie'>
					<ReactMarkdown>{`### Zmiana limitu zadań w kolumnie
Limit zadań w kolumnie zmieniamy poprzez wybranie ikony ustawień i w pop-up wpisujemy lub wybieramy nowy limit. Wybranie 0 spowoduje ustawienie braku limitu.`}</ReactMarkdown>
				<img src={ZmianaLimitu} alt='Zmiana limitu zadań'/>
				</div>
				<div id='Tworzenie-grupy'>
					<ReactMarkdown>{`### Tworzenie grupy
Nową grupę tworzymy przy przyciśnięciu przycisku **'Dodaj grupę'** i w pop-up wpisujemy nową unikalną nazwę grupy.`}</ReactMarkdown>
					<img src={TworzenieGrupy} alt='Tworzenie grupy' />
				</div>
				<div id='Zmiana-nazwy-grupy'>
					<ReactMarkdown>{`### Zmiana nazwy grupy
Nazwę grupy zmienamiy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową unikalną nazwę.`}</ReactMarkdown>
				<img src={ZmianaNazwyGrupy} alt='Zmiana nazwy grupy' />
				</div>
				<div id='Tworzenie-zadania'>
					<ReactMarkdown>{`### Tworzenie zadania
Nowe zadanie tworzymy w każdej grupie w pierwszej kolumnie przyciskając przycisk **'Dodaj zadanie'**.`}</ReactMarkdown>
					<img src={TworzenieZadania} alt='Tworzenie zadania' />
				</div>
				<div id='Zmiana-nazwy-zadania'>
					<ReactMarkdown>{`### Zmiana nazwy zadania
Nazwę zadania zmieniamy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową nazwę zadania.`}</ReactMarkdown>
				<img src={ZmianaNazwyZadania} alt='Zmiana nazwy zadania' />
				</div>
				<div id='Zmiana-koloru-zadania'>
					<ReactMarkdown>{`### Zmiana koloru zadania
Kolor zadania zmieniamy wybierając ikonę zmiany nazwy i w pop-up wybieramy jeden z czterach dostepnych kolorów, które oznaczają poziom ważności zadania.`}</ReactMarkdown>
				<img src={ZmianaKoloruZadania} alt='Zmiana koloru zadania' />
				</div>
				<div id='Status-zbuowane'>
					<ReactMarkdown>{`### Status zbugowane
Status zbugowanego zadania ustawiamy wybierając ikonę edycji i w pop-up wybieramy czy zadanie jest zbugowane. Status zbugowanego zadania uniemożliwia przeniesienie go ostatniej kolumny.`}</ReactMarkdown>
					<img src={StatusZbugowane} alt='Status zbugowane' />
				</div>
				<div id='Podzadania'>
					<ReactMarkdown>{`### Podzadania
Podzadania możemy dodać kilkając w ikonę plusa pod nazwą zadania. Pasek progresu wyświetla ilość wykonanych zadań. Można również ukryć podzadania wybierając ikonę strzałki.`}</ReactMarkdown>
					<img src={Podzadania} alt='Podzadania' />
				</div>
				<div id='Limit-uzytkownikow-mozliwych-do-przypisania'>
					<ReactMarkdown>{`### Limit uzytkowników możliwych do przypisania
Możemy ustalić limit przypisać dla danego użytkownika przypisując wartość w inpucie nad listą dostepnych użytkowników.`}</ReactMarkdown>
				<img src={ZmianaLimituDlaUzytkownika} alt='Zmiana limitu dla użytkownika' />
				</div>
				<div id='Przypisanie-uzytkownika-do-zadania'>
					<ReactMarkdown>{`### Przypisanie użytkownika do zadania
Przypisujemy użytkowników do zadania poprzez kliknięcie w ikonkę plusa i w pop-up wybieramy z listy użytkowników, których chcemy przypisać do zadania.`}</ReactMarkdown>
					<img src={PrzypisanieUzytkownikow} alt='Przypisanie użytkowników' />
				</div>
				<div id='Usuwanie-grupy-kolumny-zadania'>
					<ReactMarkdown>{`### Usuwanie kolumny, grupy i zadania
Kolumnę, grupę i zadanie możemy usunąć wybierając ikonę usunięcia i potwierdzając dzialanie w pop-up.`}</ReactMarkdown>
					<img src={Usuwanie} alt='Usuwanie' />
				</div>
			</div>
		</div>
	);
};
export default Doc;
