import { Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';

@Component({
  selector: 'app-root',
  template: `
    <p>{{title}}</p>
    <p>momentMsg: {{momentMsg}}</p>
  `
})
export class AppComponent implements OnInit {
  title = 'http://stackoverflow.com/questions/39780378/making-moment-injectable-in-angular2';

  momentMsg = this.ms.moment("20111031", "YYYYMMDD").toString();

  constructor(private ms: MomentService) {
  }

  ngOnInit() { }
}
