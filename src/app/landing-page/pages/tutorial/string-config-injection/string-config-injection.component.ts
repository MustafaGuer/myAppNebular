import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-config-injection',
  templateUrl: './string-config-injection.component.html',
  styleUrls: ['./string-config-injection.component.scss']
})
export class StringConfigInjectionComponent implements OnInit {

  myConfig: string = '';
  // schau im app module bei providers nach
  constructor(@Inject('StringComponentConfig') myConfig: string) {
    this.myConfig = myConfig;
  }

  ngOnInit(): void {
  }

}
