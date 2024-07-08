# Disco WebApp in React

L'obbiettivo era quello di creare un applicazione in react per gestire la prenotazione per determinati eventi da parte dei partecipanti

## Scelte di sviluppo

Si è deciso di frammentare il codice quanto più possibile nelle mie capacità creando cartelle apposite che siano quindi parlanti anche per una persona che riceve il codice sorgente del progetto:

- <a href="/src/components/"><b>components: </b></a> Contiente tutti i componenti che sono stati creati ed utilizzati nell'applicazione con relativo file .css nel caso servano modifiche specifiche e/o standardizzare il layout della card

- <a href="/src/hooks/"><b>Hooks:</b></a> Nella cartella hooks sono stati creati file denominati "useNome" dove viene gestito il caricamento della chiamata API e manipolati dei dati per poi esportarli e inserirli correttamente nelle pagine

- <a href="/src/img/"><b>img:</b></a> Contiene tutte le immagini che non sono state potute essere implementate tramite link

- <a href="/src/pages/"><b>pages:</b></a> In questa cartella sono presenti i file tsx con le pagine che la web app contiene e che formano il corpo fisico ed estetiche dell'applicazione

- <a href="/src/repo"><b>repo:</b></a> Contiene dei file nome.type.ts dove sono state create le interfacce per gestire al meglio i dati contenuti nella chiamata api e il file index.ts dove sono state fatte le 2 chiamate api

## Scelte UI

Dato il tema della WebApp i colori e il nome scelti richiamano l'atmosfera e cercano di far capire subito all'utente di cosa si tratta

- HOME: La home è strutturata con una navbar contentente il nome dell'app, un header statico iniziale e il corpo formato da tutte le card degli eventi che anticipano qualche informazione sull'evento che poi si andrà a selezionare.

   - Implementazioni future: nel futuro ho pensato di aggiungere una sezione di recensioni che scorre in automatico in modo da dare un feedback istantaneo all'utente; una sezione "hot party" con gli eventi che stanno andando meglio in quel periodo ed un eventuale sezione eventi speciali.

- DETTAGLIO: La pagina dettaglio contiene nuovamente la navbar con il nome dell'app e come header l'immagine dell'evento. Sotto è possibile leggere èiù informazioni riguardo all'evento, vedere il costo, dresscode richiesto, piatti e drink inclusi e in ultimo degli slot temporali cliccabili che riportano alla prenotazione dell'evento che vanno a triggerare una modale che conferma la prenotazione.

   - Implementazioni future: Inserire un database in modo da poter inviare una mail di conferma all'utente, gestire la visualizzazione delle informazioni in modo diverso, ad esempio con una tabella o nuovamente delle card.