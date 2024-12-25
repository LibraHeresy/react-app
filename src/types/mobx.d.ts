// global.d.ts
import * as MobX from 'mobx';

declare global {
  namespace Mobx {
    export type TObservableArray<T> = MobX.IObservableArray<T>;
    export type TObservable = MobX.IObservable;
    export type TObservableMap<K, V> = MobX.ObservableMap<K, V>;
    export type TObservableSet<T> = MobX.ObservableSet<T>;
  }
}