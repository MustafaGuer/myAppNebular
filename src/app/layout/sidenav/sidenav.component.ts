import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Routers } from 'src/app/shared/model/routers';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  collapsed: boolean = false;
  myId: string = Routers.Tutorial;
  myActiveClass: string = 'active';
  myNoteBlock: string = Routers.NoteBlock;

  constructor(public sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    this.collapsed = !this.collapsed;
  }

}
