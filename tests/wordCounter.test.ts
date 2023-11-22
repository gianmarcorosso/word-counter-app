// tests/wordCounter.test.ts
import { WordCounter } from '../src/wordCounter';

describe('WordCounter', () => {
  test('countWords should return the correct word counts map', () => {
    const wordCounter = new WordCounter();
    const path = '../word-counter-app/tests/wordCounterTXT.txt';

    wordCounter.countWords(path);
    const wordCounts = wordCounter.getWordCounts();
    const totalLetters = wordCounter.countLetters(path);
    const totalSpaces = wordCounter.countSpaces(path);
    const repeatedWords = wordCounter.getRepeatedWords();

    console.log('Numero totale di parole:', wordCounts);

    // Verifica che la mappa contenga le parole attese
    expect(wordCounts.get('mamma')).toBe(1);
    expect(wordCounts.get('casa')).toBe(1);
    expect(wordCounts.get('albero')).toBe(1);
    expect(wordCounts.get('pollo')).toBe(11);
    expect(wordCounts.get('libro')).toBe(1);

    expect(totalLetters).toBe(75);
    expect(totalSpaces).toBe(14);
    expect(repeatedWords.get('pollo')).toBe(11);
  });
});
