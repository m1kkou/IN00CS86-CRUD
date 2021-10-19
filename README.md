# IN00CS86-CRUD
Node, Express, MySQL project 

GET /api/v1/arvioinnit: palauttaa kaikki arvioinnit 
GET /api/v1/arvioinnit/<idArviointi>: palauttaa tietyn arvioinnin. 
POST /api/v1/arvioinnit : luo arviointi 
DELETE /api/v1/employees/<idArviointi>: poista Arviointi 
PUT /api/v1/arvioinnit/<idArviointi> päivitä arviointi"

Huom! Projekti käyttää ympäristömuuttujia tietokantayhteyden määrittämiseen. Ne voi määritellä suoraan luomalla .env -tiedoston projektin juureen. Tarvittavat muuttuja löytyy ./config/db.config.js tiedostosta. 
