# Laczkó Sándor — IT Portfolio

Reszponzív, statikus, magyar nyelvű portfólióoldal HTML, CSS és vanilla JavaScript alapon. GitHub Pagesre közvetlenül publikálható.

## Publikálás GitHub Pages segítségével

1. Hozz létre egy új GitHub repositoryt, vagy nyisd meg a régi weboldalad repositoryját.
2. Töltsd fel a projekt fájljait úgy, hogy az `index.html` a repository gyökerében legyen.
3. GitHubon nyisd meg: **Settings → Pages**.
4. A **Build and deployment** résznél válaszd a **Deploy from a branch** opciót, majd a `main` branchet és a `/ (root)` mappát.
5. Mentsd el. Néhány perc múlva a GitHub Pages által megadott címen elérhető az oldal.

## Publikálás előtt kötelezően ellenőrizd

Az `index.html` fájlban a kapcsolat résznél cseréld ki az alábbi helyőrzőket a saját adataidra:

- `SAJAT_GITHUB_FELHASZNALONEV` — a GitHub-felhasználóneved
- `EMAIL_CIMED` — a nyilvánosan megjeleníteni kívánt e-mail-címed

Ellenőrizd a projektek leírását is, és csak olyan munkát hagyj benne, amelyet nyilvánosan bemutathatsz. Ügyfél- vagy munkahelyi forráskódot, belső adatot, szervernevet, IP-címet és hozzáférési adatot ne publikálj.

## Testreszabás

- Színek, tipográfia, elrendezés: `styles.css`
- Tartalom és projektek: `index.html`
- Mobilmenü és dinamikus évszám: `script.js`
- Ikon: `assets/favicon.svg`

Nincs buildfolyamat, backend vagy telepítendő függőség. A Google Fonts internetkapcsolat esetén tölti be a Manrope és DM Mono betűcsaládokat; enélkül rendszer-betűkészletre esik vissza.
