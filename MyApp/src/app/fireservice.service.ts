import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  loginWithEmail(dados: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(dados.email, dados.password)      
}
  signup(dados: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(dados.email, dados.password)      
}

   saveDetails(data: { uid: string; [key: string]: any }) {
  return this.firestore.collection("users").doc(data.uid).set(data);
   }
   getDetails(data: { uid: string }){
    return this.firestore.collection("users").doc(data.uid).valueChanges();
   }
}
