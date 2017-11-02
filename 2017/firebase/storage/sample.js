import { Component } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase/app'
import 'firebase/storage'

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  constructor(
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
  ) {}

  upload() {
    const storageRef = firebase.storage().ref()
    // ...
  }
}