// src/store/Counter.ts
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, { name: 'CounterStore', properties: ['count'], storage: window.localStorage });
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };

  reset = () => {
    this.count = 0;
  };
}

const counter = new Counter();
export default counter;