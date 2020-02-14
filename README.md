
# nuorisopalaute-app

Nuorille suunnattu käyttöliittymä Espoon palautepalveluun.

## Depsit

Dockerilla ajamiseen riittää docker & docker-compose.

Ilman dockeria tarvitaan Node & npm v9+.

Projekti käyttää Reactia, Nodea, Koaa ja TypeScriptiä.

Projekti on suunniteltu Espoon palautepalvelua vasten. Palautepalvelu käyttää Trimbleä. Trimblen dokumentaatio: https://test.trimblefeedback.com/eFeedback/tutorials/fi/18.1%20Trimble%20Feedback_open311ja6aikarajapinnat.pdf

Nuortenpalaute-sivulta voi lähettää sekä palautetta että aloitteita. Teknisesti nämä ovat Trimblen näkökulmasta samanlaista "palautetta".

## Ajaminen

Dockerilla:
* docker-compose up

Ilman Dockeria:
* backend-hakemistossa: `npm watch-server`
* frontend-hakemistossa: `npm start`

## Projektin rakenteesta

Varsinaiseen sovellukseen kuuluvat erilliset frontend- ja backend-komponentit.

Frontend-komponentti on hakemistossa `frontend`. React-komponentit ovat hakemistossa `frontend/src/components`. Jokaista sivun osoitetta varten on oma `Page*`-niminen komponenttinsa. Esimerkiksi osoite `https://nuortenpalaute.espoo.fi/aloite` -> `PageInitiative.ts`.

Frontend ei kutsu suoraan Trimbleä, vaan käyttää kutsut backendin kautta.

Backend-puolella kaikki API-pisteet löytyvät tiedostosta `backend/src/routes.ts`.

Projektin infrapuoli on repositoriossa https://github.com/espoon-voltti/nuorisopalaute-infra
