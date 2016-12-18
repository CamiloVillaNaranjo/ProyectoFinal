import { Observable } from 'rxjs/Rx';

export interface ICommonServiceBehavior {
    getAll<T>(): Observable<T[]>;
    getById<T>(args: number): Observable<T>;
    addItem<T>(args: T): Observable<T>;
    updateItem<T>(args: T): Observable<T>;
}