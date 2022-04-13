import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed: boolean = false;
  constructor(public sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    this.collapsed = !this.collapsed;
  }

}
