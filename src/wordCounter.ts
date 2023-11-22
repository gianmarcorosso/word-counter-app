// src/wordCounter.ts
import { FileReader } from './utils/fileReader';
import axios from 'axios';

export class WordCounter {
  private fileReader: FileReader;
  private wordCounts: Map<string, number> = new Map();
  private content: string = '';

  constructor() {
    this.fileReader = new FileReader();
  }

  private cleanWord(word: string): string {
    return word.replace(/[^a-zA-Z]/g, ''); // Remove symbols and special characters from the word.
  }

  countWordsFromString(content: string): void {
    this.content = content;
    const words = content.split(/\s+/).filter(word => word !== '');

    words.forEach(word => {
      const cleanedWord = this.cleanWord(word);
      const currentCount = this.wordCounts.get(cleanedWord) || 0;
      this.wordCounts.set(cleanedWord, currentCount + 1);
    });
  }

  countLettersFromString(content: string): number {
    const letters = content.replace(/[^a-zA-Z]/g, ''); // Remove everything except the letters.
    return letters.length;
  }

  countSpacesFromString(content: string): number {
    const spaces = content.split(' ').length - 1;
    return spaces;
  }

  async countWords(pathOrURL: string): Promise<void> {
    let content: string;

    if (pathOrURL.startsWith('http://') || pathOrURL.startsWith('https://')) {
      content = await this.fetchContentFromURL(pathOrURL);
    } else {
      content = this.fileReader.readFile(pathOrURL);
    }

    this.countWordsFromString(content);
  }

  private async fetchContentFromURL(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error while retrieving content from the URL: ${url}`);
      throw error;
    }
  }

  printResults(pathOrURL: string): void {
    console.log('Total number of words:', this.wordCounts.size);
    console.log('Total number of letters:', this.countLettersFromString(this.content));
    console.log('Total number of paces:', this.countSpacesFromString(this.content));

    const repeatedWords = this.getRepeatedWords();
    console.log('Words repeated more than 10 times:', repeatedWords);
  }

  getContent(): string {
    return this.content;
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

if (process.argv.length >= 3) {
  const path = process.argv[2];
  const wordCounter = new WordCounter();
  wordCounter.countWords(path).then(() => {
    wordCounter.printResults(path);
  });
}
