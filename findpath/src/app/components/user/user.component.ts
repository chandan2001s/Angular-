import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name="Chandan"
  status="online"
  current="10"
  isbtndisabled=true
  userInput="test"

  Change(e:Event){

    //one way data binding
    const value=(e.target as HTMLInputElement).value;

    //2 way data binding
    this.userInput=value
  }
}
