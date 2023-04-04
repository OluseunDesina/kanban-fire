import { Component, OnInit, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { KanbanService } from 'src/app/kanban.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  kanbanService = inject(KanbanService);
  user: User | undefined | null;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = this.kanbanService.getLoggedInUser();
  }

  logout() {
    this.kanbanService.logout();
  }
}
