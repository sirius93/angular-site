import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FirebaseService {
  data: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
  }
  getData() {
    this.data = this.db.list('siteData');
    return this.data;
  }
}

