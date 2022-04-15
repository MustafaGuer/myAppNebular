import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-block',
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.scss']
})
export class NoteBlockComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('route id', this.route.snapshot.params['id']);
  }

}
