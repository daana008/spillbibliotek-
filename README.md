# Spillbibilotek - readme 
## Systembeskrivelse 
spillbibliotek er en webasert system som viser spill og statistikker på om jeg har dem og hvilken systemer jeg har dem på. Det også står litt ekstra information som når den kom ut, min rating og egen notater.
***
## Teknisk Beskrivelse
* **Backend: node.js - Express**
  
  - bibiloteker: Express - Mariadb
    
* **Database: Mariadb**
  
  - Database: spillbibliotek
  - Tabell: id, tittel, plattform, sjanger, utgivelsesar, eier_status, rating, notater
    
* **Teknologier og Versjoner**
  
  - Node.js: versjon, 25.6.0
  - MariaDB: versjon, 12.1.2-MariaDB
***
# Instilation og oppsett 
beskriver steg for steg hvordan man setter opp på lokal maskin

1. Klon repo og gå til backend:
```
git clone <repo-url>
cd gameslibrary/backend
```

2. Installer avhengigheter:
```
npm install
```

3. Start MariaDB og sørg for at du kan logge inn:
```
mariadb -u madde -p -h localhost
```

4. Initialiser databasen (kjør kun én gang eller når du vil resette testdata):
```
node dbinit.js
```

5. Start serveren:
```
node app.js
```

# eller for utvikling:
# nodemon app.js
