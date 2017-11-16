import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoList: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(
    db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.todoList = db.list('/todos');
    this.user = afAuth.authState;
    console.log(this.user);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(_ => { console.log(this.user) });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
