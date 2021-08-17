export default {
  //
  //  Local name of the language
  //
  languageLocalName: 'Italiano',

  //
  // General
  //
  title: 'Generatore codici 3D',
  subtitle: 'Esporta codici QR o codici Spotify in formato STL per la stampa 3D',
  preview: 'Anteprima',
  controlsHint: 'Usa il tuo mouse per ruotare la visuale',
  changeLanguage: 'Cambia Lingua',
  contributeTranslation: 'Contribuisci con una traduzione',
  generateButton: 'Genera Modello 3D',
  scrollDownForGuide: 'Scorri verso il basso per una guida su come stampare il tuo codice QR.',
  printabilityWarning: 'Avvertenza per la stampabilità 3D',
  printabilityWarningBody: 'Almeno un bordo dell elemento più piccolo nel modello 3D è molto piccolo: {dimensions}. A seconda della configurazione, ciò potrebbe rendere più difficile la stampa.',
  supportMe: 'Supporta qrcode2stl',
  viewOnGithub: 'GitHub',
  shareButtonTitle: 'Condividi questa pagina',
  file: 'file',
  no: 'no',
  yes: 'sì',
  top: 'sopra',
  bottom: 'sotto',
  left: 'sinistra',
  right: 'destra',
  content: 'contenuto',
  min: 'min',
  max: 'max',
  thankYou: 'Grazie mille per il supporto. Sei forte!',
  promotionTitle: 'Vuoi iniziare un nuovo hobby? Stai cercando una seconda/terza stampante 3D?',
  promotionSubtitle: 'Ecco alcune stampanti 3D e accessori per stampanti 3D consigliati per aiutarti. Se vuoi supportare lo sviluppo di questo strumento, considera di utilizzare i link sottostanti per acquistare su AliExpress.',
  corner: 'angolo',
  isGenerating: 'Generando il modello 3D...',
  headerShareNotice: 'Condividi il tuo codice con questo URL',
  copyExistingQRCode: 'Copia un codice QR esistente',
  holdQRCodeInView: 'Tieni il codice QR visibile nella camera',
  decodedQRCodeData: 'Dati del codice QR decodificati',

  //
  // QR Code Options Panel
  //
  qrCodeOptionsTitle: 'Opzioni codice QR',
  qrCodeTextPlaceholder: 'Il testo del tuo codice QR e.g. Hello World or https://flxn.de',
  errorCorrection: 'Correzione Errori',
  errorCorrectionHelp: 'Maggiore sarà il livello di correzione, più denso sarà il codice QR.',
  optionalFieldsHint: 'Non tutti i campi devono essere riempiti.',
  // Wifi
  ssidPlaceholder: 'Il nome della rete WiFi',
  password: 'Password',
  passwordPlaceholder: 'La password della rete WiFi',
  security: 'Sicurezza',
  hidden: 'Nascosta',
  hiddenText: 'SSID nascosta',
  // Contact
  contact: 'Contatto',
  yourName: 'Il tuo nome',
  firstname: 'Nome',
  lastname: 'Cognome',
  organization: 'Organizazione',
  role: 'Ruolo',
  numbers: 'Numeri',
  cellphone: 'Mobile',
  phone: 'Fisso',
  street: 'Indirizzo',
  city: 'Città',
  state: 'Stato',
  // E-Mail
  recipient: 'Destinatario',
  recipientPlaceholder: 'Indirizzo che dovrebbe ricevere la mail',
  subject: 'Titolo',
  subjectPlaceholder: 'Il titolo della mail',
  body: 'Corpo',
  bodyPlaceholder: 'Il contenuto della mail',
  // SMS
  phonePlaceholder: 'Il numero di telefono del destinatario',
  smsMessage: 'Messaggio',
  smsMessagePlaceholder: 'Il messaggio SMS',

  //
  // Spotify Options Panel
  //
  spotifyOptions: 'Opzioni codice Spotify',
  spotifyUri: 'Spotify URI/Link',
  spotifyUriHelp: 'Puoi recuperare URI Spotify per una traccia/album/playlist/utente da Spotify cliccando "Condividi" e poi "URI".',
  spotifyCodeHeightInfo: 'I codici Spotify hanno un rapport di aspetto fisso di 4:1',

  //
  // 3D Model Options Panel
  //
  modelOptions: 'Opzioni Modello 3D',
  base: 'Base',
  width: 'Larghezza',
  height: 'Altezza',
  depth: 'Profondità',
  cornerRadius: 'Raggio Angolo',
  border: 'Bordo',
  borderAroundBase: 'Aggiungi un bordo attorno alla base',
  margin: 'Margine',
  block: 'Blocco',
  style: 'Stile',
  shape: 'Forma',
  rectangle: 'rettangolo',
  roundedRectangle: 'rettangolo arrotondato',
  square: 'quadrato',
  round: 'tondo',
  size: 'Dimensione',
  blockSizeHelp: `
   Questa impostazione modifica la dimensione dei singoli blocchi di codici QR.
   Gioca con questo valore per ottenere un aspetto visivo unico, ma tieni presente che ciò potrebbe influire sulla leggibilità del codice QR.\\
   Controlla l'anteprima con il telefono prima di stampare per vedere se sei andato troppo oltre.
   Rimani al 100% se non sei sicuro.
   Se aumenti questo valore sopra il 100% (es. 120%) i blocchi formeranno isole collegate che renderanno più facile la stampa del codice QR.`,
  icon: 'Icona',
  noIcon: 'Senza icona',
  iconSizeHelp: `
  La dimensione dell'icona rispetto alla larghezza totale del QR Code.
   L'icona abusa della correzione degli errori incorporata nel codice qr. Se è troppo grande il codice potrebbe non essere leggibile.
   Se vuoi avere un'icona grande ma il tuo telefono non è in grado di leggere il codice QR, puoi provare ad aumentare il livello di correzione degli errori.`,
  text: 'Testo',
  textOnEdge: 'Aggiungi un titolo personalizzato al tuo codice QR.',
  placement: 'Posizione',
  theText: 'Testo normale\n*Testo Corsivo*\n**Testo in Grassetto**\n***Testo in Corsivo & Grassetto***',
  fontInfoText: 'Cambia il font di righe individuali:',
  italicInfoText: '*corsivo*',
  boldInfoText: '**grassetto**',
  cityMode: 'Città QR',
  cityModeText: 'Altera casualmente l altezza dei blocchi.',
  invert: 'Inverti',
  invertText: 'Inverti la struttura del codice',
  keychain: 'Portachiavi',
  keychainHelp: 'Aggiunge un buco sul fianco del modello (p.e. per attaccarlo al portachiavi).',
  mirrorHoles: 'Buchi specchio',
  mirrorHolesHelp: 'Rispecchia il buco sul lato oppostto (p.e. per fissarlo con delle viti).',
  keychainHoleDiameter: 'Diametro Buco',
  nfcIndentation: 'NFC/RFID',
  nfcIndentationHelp: 'Aggiunge una rientranza sul lato inferiore della base dove è possibile inserire un tag NFC/RFID.',
  indentation: 'Rientranza',
  nfcIndentationHiddenHelp: 'Crea una cavità all interno della base con un offset di 1 mm dal fondo della base. Ciò consente di incorporare saldamente il tag NFC all interno della stampa 3D stessa. Metti in pausa la stampa prima del livello di chiusura, inserisci il tag, quindi riprendi la stampa. Assicurati che la profondità dell indentazione sia leggermente maggiore dell etichetta stessa e regola la profondità della base di conseguenza.',

  //
  // Export Settings
  //
  exportTypeHelp: 'Lascialo come "binario" per mantenere le dimensioni del file basse. Se il tuo software ha problemi con il file generato, puoi provare a modificare questa opzione.',
  exportSeparatePartsHelp: 'Se impostato su "sì" la base e il codice qr verranno salvati come due parti separate per stampanti con stampa a doppia estrusione. Il tuo browser potrebbe richiedere i permessi per scaricare più file.',
  separateParts: 'Separa parti',
  saveAsButton: 'Salva come STL',

  //
  // Print Guide
  // with HTML Tags included!
  //
  printGuideTitle: 'Guida stampa 3D',
  printGuideSubtitle: 'Come stampare un codice QR a due colori con una stampante 3D a estrusore singolo?',
  printGuideWIPInfo: 'Questa guida è in fase di sviluppo.',
  printGuideIntro: `
  Puoi stampare oggetti multicolori anche con un singolo estrusore scambiando il filamento su livelli specifici.<br/>
   Possiamo utilizzare questo metodo per stampare la base del nostro codice QR e la parte del codice QR effettivo sulla parte superiore in due colori diversi.<br/>
   Questa tecnica è ciò che rende possibili i codici QR stampabili in 3D in primo luogo.<br/>
   Il processo è diverso a seconda del software slicer che stai utilizzando.<br/>
   In questa guida mi concentrerò solo su Cura e PrusaSlicer e non mi assumo alcuna responsabilità se in qualche modo danneggi la tua stampante nel processo.<br/>`,
  printGuideSupportWarningTitle: 'Ricorda: non tutte le stampanti/firmware supportano le funzionalità necessarie!',
  printGuideSupportWarningMessage: `
 Questa è da intendersi come una guida generale, in quanto non posso fornire un resoconto su ogni combinazione stampante/firmware disponibile.<br/>
   Consiglio di fare prima una piccola stampa di prova. Se hai problemi, cerca online se il tuo modello di stampante specifico supporta il comando G-Code <strong>M600</strong> per la sostituzione del filamento.<br/>`,
  printGuideGenerateQRCode: 'Generazione del codice QR',
  printGuideGenerateQRCodeSteps: `
   <li>Seleziona il tipo di codice QR che desideri generare in "Opzioni codice QR".</li>
   <li>Compila i campi necessari.</li>
   <li>Configura il modello 3D in "Opzioni modello 3D".</li>
   <li>Fai clic su "Genera modello 3D"</li>
   <li>Salva il file stl tramite il pulsante "Salva come STL" in alto a destra.</li>`,
  printGuideVersionDisclaimer: 'Versione {version}, la tua esperienza può essere diversa.',
  // Cura
  printGuideCuraStep1: `
   Seziona il modello e individua il livello in cui dovrebbe avvenire il cambio di colore.<br/>
   Nel mio caso questo è al livello 16.<br/>`,
  printGuideCuraStep2: `
   <li>Vai su "Estensioni -> Post-elaborazione -> Modifica G-Code".</li>
   <li>Fai clic su "Aggiungi uno script", quindi seleziona "Change Filament".</li>
   <li>Nelle impostazioni di modifica del filamento, imposta il valore "Layer" sul numero del tuo livello recuperato dallo primo passaggio.</li>
   <li>Ri-seziona il tuo modello. L'icona a sinistra del pulsante "Sezionamento" indica uno script di Post-elaborazione attivo.</li>`,
  // PrusaSlicer
  printGuidePrusaSlicerStep1: `
   Seziona il modello e individua il livello in cui dovrebbe avvenire il cambio di colore.<br/>
   Nel mio caso questo è al livello 11.<br/>`,
  printGuidePrusaSlicerStep2: `
   <li>Fai clic sul piccolo segno più a destra della barra di selezione del livello.</li>
   <li> PrusaSlicer ti offre una bella anteprima in cui puoi vedere i diversi colori per verificare di aver selezionato il livello giusto. Le parti del codice qr dovrebbero avere un colore diverso rispetto alla base</li>
   <li>Ri-seziona il tuo modello.</li>`,
  printGuideStep3: `
   Ora puoi stampare il modello come al solito.<br/>
   La stampante 3D si fermerà sul livello specificato e si sposterà all'origine del piano di stampa.
   Ora puoi scambiare il filamento e riavviare il lavoro di stampa dal menu della tua stampante.`,

};
