## Introduzione
TakeAway è un applicazione mobile che permette di ordinare cibo dai propri ristoranti preferiti da qualsiasi posto tu voglia-

## Funzionalità
TakeAway permette di : 
- consentire all'utente di registrarsi
- consentire all'utente di effettuare il login
- visualizzare i "ristoranti" disponibili
- visualzzare i piatti di ogni "ristorante"
- poter ordinare
- visualizzare l'elenco dei propri ordini con relative informazioni di cosa si ha ordinato

## Struttura
#### Backend
L'applicazione presente tre backend, uno per gestire l'autenticazione, uno per gestire i dati relativi ai "ristoranti" e uno per gestire le prenotazioni degli utenti. Tutti e tre sono stati sviluppati basandosi su [Node.js](https://nodejs.org/it/ "Node.js") ed utilizza diversi framework tra cui: [Express.js](https://expressjs.com/ "Express.js"), [MongoDB](https://www.mongodb.com/ "MongoDB"), [Bcryptjs](https://www.npmjs.com/package/bcryptjs "Bcryptjs"), [Json web token](https://www.npmjs.com/package/jsonwebtoken "Json web token"). Questi web service rest sono stati messi online sfruttando la piattaforma [Vercel](https://vercel.com/docs "Vercel").

#### Frontend
Il frontend è stato realizzato basandosi su [Expo](https://expo.io/tools "Expo Cli") che permette di realizzare applicazioni mobile con il framework [React Native](https://reactnative.dev/ "React Native"), che utilizza a sua volta diversi framework tra cui: [UI-Kitten](https://akveo.github.io/react-native-ui-kitten/ "UI-Kitten"), [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start "React-router-dom"), [React-navigation](https://reactnavigation.org/ "React navigation"), [React-native-vector-icons](https://oblador.github.io/react-native-vector-icons/"react-native-vector-icons").

## Prova ora
Se si desidera provare premere [qui](https://expo.io/@il_cordio/Take_Away "https://expo.io/@il_cordio/Take_Away").