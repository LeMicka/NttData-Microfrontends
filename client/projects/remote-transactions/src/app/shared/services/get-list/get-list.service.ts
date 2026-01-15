import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IOperationType } from '../../models/operation-type.interface';
import { mockOperations } from '../../models/mocks/data-mock';

@Injectable({
  providedIn: 'root'
})
export class getListService {

  constructor() { }

  getListData(mode: string): Observable<IOperationType[]> {
    switch (mode) {
      case 'load':
        return of(mockOperations);
      case 'empty':
        return of([]);
      case 'error':
        return throwError(() => new Error('An error happened'));
      default:
        return of([]);
    }
  }
}
