import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireauth';
  constructor(private afAuth: AngularFireAuth){
  }
  googleSignInViaPopup(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((userCredentials)=> console.log(userCredentials));
  }
}
