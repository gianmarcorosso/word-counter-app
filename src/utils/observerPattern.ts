// src/utils/observerPattern.ts
export interface Observer {
    update(data: any): void;
  }
  
  export class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    notifyObservers(data: any): void {
      this.observers.forEach(observer => {
        observer.update(data);
      });
    }
  }
  