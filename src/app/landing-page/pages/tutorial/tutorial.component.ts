import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  url: string = 'https://www.mustafaguer.de';
  number: number = 0;
  languages: string[] = ['JavaScript', 'TypeScript', 'Angular', 'PHP'];
  length: number = 0;
  name: string = 'Angular Tutorial';
  isGreenActive: boolean = true;
  isRedActive: boolean = true;
  isDisabled: boolean = false;
  myColor: string = 'lightblue';
  myBorder: string = '1px solid yellow';
  foo: {} ={ name: 'MusG', color: 'Black', car: 'BMW 3series', onWork: true };

  constructor() {}

  ngOnInit(): void {}

  myClick(e: Event) {
    console.log(e);
    this.number++;
  }

  changeLength() {
    this.length++;
  }
}
