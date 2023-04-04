import { Component, OnInit, inject } from '@angular/core';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private kanbanService: KanbanService = inject(KanbanService);

  ngOnInit(): void {
    this.kanbanService.getRedirectResult();
  }

  signInAsGuest() {
    this.kanbanService.signInAsGuest();
  }

  signIn() {
    this.kanbanService.signInWithGoogle();
  }
}
