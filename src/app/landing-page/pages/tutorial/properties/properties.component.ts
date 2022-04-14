import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() myProperty: any;
  // @Input('myProperty') myProp: any;

  myClick() {
    // window.alert(this.myProperty);
    console.log(this.myProperty);
    if (this.myProperty.onWork) {
      alert('COOL');
    } else {
      alert('hmmm');
    }
  }

  // myClick() {
  //   window.alert(this.myProperty);
  //   console.log(this.myProp);
  //   if (this.myProp.onWork) {
  //     alert('COOL');
  //   } else {
  //     alert('hmmm');
  //   }
  // }
}
