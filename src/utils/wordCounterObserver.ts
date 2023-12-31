// src/utils/wordCounterObserver.ts
import { Observer } from './observerPattern';

export class WordCounterObserver implements Observer {
  private wordCounter: any;

  constructor(wordCounter: any) {
    this.wordCounter = wordCounter;
  }

  update(data: any): void {
    console.log(`Words total in file: ${data}`);
  }
}
