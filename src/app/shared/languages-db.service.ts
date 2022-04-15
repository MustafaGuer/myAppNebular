import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesDBService {

  languages: string[];

  constructor() {
    this.languages = [
      'JavaSCript',
      'Angular',
      'HTML',
      'CSS',
      'TypeScript',
      'PHP'
    ]
  }
  getLanguages() {
    return ['JavaSCript', 'Angular', 'HTML', 'CSS', 'TypeScript', 'PHP'];
    // return [...this.languages];
    // return this.languages;
  }
}
