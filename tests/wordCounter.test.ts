// tests/wordCounter.test.ts
import { WordCounter } from '../src/wordCounter';

describe('WordCounter', () => {
  test('countWords should return the correct number of words', async () => {
    const wordCounter = new WordCounter();
    const pathOrURL = './tests/wordCounterTXT.txt' //'https://www.york.ac.uk/teaching/cws/wws/webpage1.html'

    await wordCounter.countWords(pathOrURL);
    const totalWords = wordCounter.getWordCounts();
    const totalLetters = wordCounter.countLettersFromString(wordCounter.getContent());
    const totalSpaces = wordCounter.countSpacesFromString(wordCounter.getContent());
    const repeatedWords = wordCounter.getRepeatedWords();

    console.log('Numero totale di parole:', totalWords.size);
    console.log('Numero totale di lettere:', totalLetters);
    console.log('Numero totale di spazi:', totalSpaces);
    console.log('Parole che si ripetono più di 10 volte:', repeatedWords);

    expect(totalWords.size).toBe(5);                  
    expect(totalLetters).toBe(75);                  
    expect(totalSpaces).toBe(14);                    
    expect(repeatedWords.get('pollo')).toBe(11);      
    
    // for URL testing
    // expect(totalWords.size).toBe(319);
    // expect(totalLetters).toBe(2925);
    // expect(totalSpaces).toBe(636); 
    // expect(repeatedWords.get('to')).toBeGreaterThan(10);
    // expect(repeatedWords.get('you')).toBeGreaterThan(10);
    // expect(repeatedWords.get('the')).toBeGreaterThan(10);
    // expect(repeatedWords.get('and')).toBeGreaterThan(10);
    // expect(repeatedWords.get('your')).toBeGreaterThan(10);
    // expect(repeatedWords.get('page')).toBeGreaterThan(10);
    
  });
});
