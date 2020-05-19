import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const config = {
  apiKey: "AIzaSyBkXwJKOkqwxZro3xkA2_wYKTXwwSguyx4",
  authDomain: "login-8b30e.firebaseapp.com",
  databaseURL: "https://login-8b30e.firebaseio.com",
  projectId: "login-8b30e",
  storageBucket: "login-8b30e.appspot.com",
  messagingSenderId: "600998627532",
  appId: "1:600998627532:web:1e6cd49300862868cd1a69",
  measurementId: "G-KMXLCS22E2"
};
@NgModule({
  declarations: [
    AppComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
