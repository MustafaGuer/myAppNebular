import { Component, Inject, OnInit } from '@angular/core';
import { LanguagesDBService } from '../../../../shared/languages-db.service';

@Component({
  selector: 'app-constructor-injection',
  templateUrl: './constructor-injection.component.html',
  styleUrls: ['./constructor-injection.component.scss']
})
export class ConstructorInjectionComponent implements OnInit {

  languages: string[];

  constructor(db: LanguagesDBService) {
    this.languages = db.languages;
    // this.languages = db.getLanguages();
  }

  ngOnInit(): void {
  }

}
