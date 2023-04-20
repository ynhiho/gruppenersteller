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

  onInput(member: string){
    this.newMemberNameInput = member;
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

}
