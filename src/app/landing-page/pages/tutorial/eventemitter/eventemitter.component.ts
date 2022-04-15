import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.scss']
})
export class EventemitterComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.myEvent.emit();
  }
}
