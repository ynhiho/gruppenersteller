import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newMemberNameInput = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = 0;
  teams: string[][] = [];

  onInput(member: string){
    this.newMemberNameInput = member;
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value);
  }

  addMember(){

    if(!this.newMemberNameInput){
      this.errorMessage = "Name can't be empty";
      return
    }

    this.errorMessage = '';
    this.members.push(this.newMemberNameInput);
    this.newMemberNameInput = "";
    console.log(this.members);
  }

  generateTeams() {

    // if numberOfTeams is 0 or undefined, leave this method
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = 'Invalid number of teams';
      return
    }

    if(this.members.length < this.numberOfTeams){
      this.errorMessage = "Not enough members"
      return
    }

    this.errorMessage = '';
    //creates a copy
    const allMembers = [...this.members]

    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if(!member)break;

        if (this.teams[i]){
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';

  }

}
