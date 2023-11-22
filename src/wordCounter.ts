// src/wordCounter.ts
import { FileReader } from './utils/fileReader';

export class WordCounter {
  private fileReader: FileReader;
  private wordCounts: Map<string, number> = new Map();

  constructor() {
    this.fileReader = new FileReader();
  }

  countWordsFromString(content: string): void {
    const words = content.split(/\s+/).filter(word => word !== '');

    words.forEach(word => {
      const currentCount = this.wordCounts.get(word) || 0;
      this.wordCounts.set(word, currentCount + 1);
    });
  }

  countLettersFromString(content: string): number {
    const letters = content.replace(/[^a-zA-Z]/g, ''); // Rimuovi tutto tranne le lettere
    return letters.length;
  }

  countSpacesFromString(content: string): number {
    const spaces = content.split(' ').length - 1;
    return spaces;
  }

  countWords(path: string): void {
    const content = this.fileReader.readFile(path);
    this.countWordsFromString(content);
  }

  countLetters(path: string): number {
    const content = this.fileReader.readFile(path);
    return this.countLettersFromString(content);
  }

  countSpaces(path: string): number {
    const content = this.fileReader.readFile(path);
    return this.countSpacesFromString(content);
  }

  printResults(path: string): void {
    const content = this.fileReader.readFile(path);

    // Calcola il totale delle parole, anche quelle che si ripetono più di 10 volte
    const totalWords = Array.from(this.wordCounts.values()).reduce((acc, count) => acc + count, 0);

    console.log('Numero totale di parole:', totalWords);
    console.log('Numero totale di lettere:', this.countLettersFromString(content));
    console.log('Numero totale di spazi:', this.countSpacesFromString(content));

    const repeatedWords = this.getRepeatedWords();
    console.log('Parole che si ripetono più di 10 volte:', repeatedWords);
  }

  getWordCounts(): Map<string, number> {
    return this.wordCounts;
  }

  getRepeatedWords(): Map<string, number> {
    const repeatedWords: Map<string, number> = new Map();
    this.wordCounts.forEach((count, word) => {
      if (count > 10) {
        repeatedWords.set(word, count);
      }
    });
    return repeatedWords;
  }
}

// Esegui il conteggio al lancio dello script se viene fornito un percorso
if (process.argv.length >= 3) {
  const path = process.argv[2];
  const wordCounter = new WordCounter();
  wordCounter.countWords(path);
  wordCounter.printResults(path);
}
