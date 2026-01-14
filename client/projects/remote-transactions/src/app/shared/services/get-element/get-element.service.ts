import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IOperationType } from '../../models/operation-type';
import { mockOperations } from '../../models/mocks/data-mock';

@Injectable({
  providedIn: 'root'
})
export class getElementService {

  constructor() { }

  getElementData(id: number): Observable<IOperationType> {
    const elem = mockOperations.find(elem => elem.id === id);
    if (!elem){
        return throwError(() => new Error('An error happened'))
    }
    return of(elem);
  }
}