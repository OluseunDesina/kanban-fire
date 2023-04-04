import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, getRedirectResult, signInAnonymously, signInWithRedirect, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private googleAuthProvider = new GoogleAuthProvider();

  constructor() { }

  getRedirectResult() {
    getRedirectResult(this.auth)
    .then((result) => {
      if (!result) return;
      this.router.navigate(["/kanban"])
    })
  }

  signInWithGoogle() {
   return signInWithRedirect(this.auth, this.googleAuthProvider);
  }

  signInAsGuest() {
    signInAnonymously(this.auth)
    .then((result) => {
      if (!result) return;
      this.router.navigate(["/kanban"])
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getLoggedInUser(): User | null {
   return this.auth.currentUser
  }

  logout() {
    this.router.navigate(["/"])
    // signOut(this.auth)
    this.router.navigate(["/"])
    // .then((result) => {
    //   console.log(result)
    // })
  }
}
