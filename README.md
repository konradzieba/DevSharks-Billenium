# DevSharks - Billenium
Repozytorium zespołu DevSharks, storzone w celu realizacji projektu Interaktywnej tablicy Kanban.

## Technologie
### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
### Backend
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
### Testy
Testy jednostkowe:\
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)\
Testy e2e:\
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
### Deployment
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)


## Instalacja
By uruchomić projekt lokalnie po instalacji środowiska [Node.js](https://nodejs.org/en), menadżera pakietów [Yarn](https://yarnpkg.com/getting-started/install) i pobraniu plików, znajdując się w folderze z plikami w terminalu inicjujemy komendy:
```bash
yarn install
yarn start
```
Projekt uruchomi się pod adresem http://localhost:3000/

## Funkcjonalności 

### Zmiana języka
Tablica kanban jest dostępna w 6 językach, które po wybraniu zapisują się w localstorage.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_jezyka.gif)

### Logowanie
Logowanie się by uzyskać dostęp do tablicy kanban.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Logowanie.gif)

### Rejestracja
Zarejestorwanie się użytkownika by uzyskać dostęp do tablicy kanban, po prawidłowej rejestracji strona przekieruje do ekranu tablicy kanban.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Rejestracja.gif)

### Przypisanie zdjęcia 
Przypisać zdjęcie możemy będąc zalogowanym użytkownikiem i w prawym roku wybieramy swoje zdjęcie i z menu rozwijanego wybieramy opcję **'Zmień avatar'**.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_avatara.gif)

### Tworzenie kolumny
Nową kolumnę tworzymy przy przyciśnięciu przycisku **'Dodaj kolumnę'**.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Tworzenie_kolumny.gif)

### Zmiana nazwy kolumny
Nazwę kolumny zmieniamy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową nazwę.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_nazwy_kolumny.gif)

### Zmiana limitu zadań w kolumnie
Limit zadań w kolumnie zmieniamy poprzez wybranie ikony ustawień i w pop-up wpisujemy lub wybieramy nowy limit. Wybranie 0 spowoduje ustawienie braku limitu.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_limitu.gif)

### Tworzenie grupy
Nową grupę tworzymy przy przyciśnięciu przycisku **'Dodaj grupę'** i w pop-up wpisujemy nową unikalną nazwę grupy.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Tworznie_grupy.gif)

### Zmiana nazwy grupy
Nazwę grupy zmienamiy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową unikalną nazwę.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_nazwy_grupy.gif)

### Tworzenie zadania
Nowe zadanie tworzymy w każdej grupie w pierwszej kolumnie przyciskając przycisk **'Dodaj zadanie'**.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Tworznie_zadania.gif)

### Zmiana nazwy zadania
Nazwę zadania zmieniamy wybierając ikonę zmiany nazwy i w pop-up wpisujemy nową nazwę zadania.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_nazwy_zadania.gif)

### Zmiana koloru zadania
Kolor zadania zmieniamy wybierając ikonę zmiany nazwy i w pop-up wybieramy jeden z czterach dostepnych kolorów, które oznaczają poziom ważności zadania.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_koloru_zadania.gif)

### Status zbugowane
Status zbugowanego zadania ustawiamy wybierając ikonę edycji i w pop-up wybieramy czy zadanie jest zbugowane. Status zbugowanego zadania uniemożliwia przeniesienie go ostatniej kolumny.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Status_zbugowane.gif)

### Podzadania
Podzadania możemy dodać kilkając w ikonę plusa pod nazwą zadania. Pasek progresu wyświetla ilość wykonanych zadań. Można również ukryć podzadania wybierając ikonę strzałki.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Podzadania.gif)

### Limit uzytkowników możliwych do przypisania
Możemy ustalić limit przypisać dla danego użytkownika przypisując wartość w inpucie nad listą dostepnych użytkowników.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Zmiana_limitu_dla_uzytkownika.gif)

### Przypisanie użytkownika do zadania
Przypisujemy użytkowników do zadania poprzez kliknięcie w ikonkę plusa i w pop-up wybieramy z listy użytkowników, których chcemy przypisać do zadania.\
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Przypisywanie_uzytkownikow.gif)

### Usuwanie kolumny, grupy i zadania
Kolumnę, grupę i zadanie możemy usunąć wybierając ikonę usunięcia i potwierdzając dzialanie w pop-up.
![](https://github.com/konradzieba/DevSharks-Billenium/blob/main/Documentation/media/Usuwanie.gif)

## Członkowie zespołu
[Haszek Tymon](https://github.com/Tymon-bot)\
[Witasik Arkadiusz](https://github.com/ArkadiuszWitasik)\
[Zięba Konrad](https://github.com/konradzieba)\
[Ziółkowski Michał](https://github.com/MichalZZZZ)
