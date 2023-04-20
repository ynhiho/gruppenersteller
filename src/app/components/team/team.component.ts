import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  //receives data from app.component.html, used in team.component.html
  @Input() team: string[] = [];
  @Input() index: number = 0;

}
