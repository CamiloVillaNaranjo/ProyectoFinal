import { Observable } from 'rxjs/Rx';

export interface ICommonServiceBehavior {
    getAll<T>(): T[];
    getById<T>(args: number): T;
    addItem<T>(args: T): T;
    updateItem<T>(args: T): T;
}