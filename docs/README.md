# Word Counter App

Questo è un'applicazione Node.js che conta il numero di parole, lettere e spazi in un file di testo. Può anche identificare le parole che si ripetono più di 10 volte.

## Prerequisiti

Assicurati di avere Node.js installato sulla tua macchina. Puoi scaricarlo da [https://nodejs.org/](https://nodejs.org/).

## Installazione

1. Clona questo repository sul tuo computer:

   ```bash
   git clone https://github.com/gianmarcorosso/word-counter-app.git

2. Naviga nella directory del progetto:
   ```bash
   cd word-counter-app

3. Installa le dipendenze:
   ```bash
   npm install

## Utilizzo

Per contare le parole, lettere e spazi in un file di testo, esegui il seguente comando nella tua console:
```bash
npm start path/al/tuo/file.txt
```
Sostituisci path/al/tuo/file.txt con il percorso del tuo file di testo.

L'applicazione stamperà quindi le statistiche nel terminale.

## Esempio di utilizzo

```bash
npm start docs/text_file.txt
```
Questo comando conterà le parole nel file di esempio docs/text_file.txt e stamperà i risultati nel terminale.

### Testing

```bash
npm test
```
Test text file:
../tests/wordCounterTXT.txt