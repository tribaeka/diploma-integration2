import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cv} from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private subQuerySource = new BehaviorSubject<string>('');
  currentSubQuery = this.subQuerySource.asObservable();

  private cvToUpdateSource = new BehaviorSubject<Cv>(null);
  currentCvToUpdate = this.cvToUpdateSource.asObservable();

  private sideSource = new BehaviorSubject<string>('');
  currentSide = this.sideSource.asObservable();

  constructor() { }

  changeSubQuery(subQuery: string) {
    this.subQuerySource.next(subQuery.startsWith(' ') ? subQuery.slice(1) : subQuery);
  }

  changeSide(side: string) {
    this.sideSource.next(side);
  }

  changeCvToUpdate(cv: Cv) {
    this.cvToUpdateSource.next(cv);
  }
}
