import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  collapsed: boolean = false;

  constructor(public sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    this.collapsed = !this.collapsed;
  }

}
