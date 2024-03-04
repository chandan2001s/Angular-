import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  users=[
    {
      name:"Ritesh",
      status:"Online",
      distance:9,
    },
    {
      name:"Sunenda",
      status:"Offline",
      distance:15,
    },
    {
      name:"Navjot",
      status:"Offline",
      distance:20,
    },
    {
      name:"Ashutosh",
      status:"Online",
      distance:30,
    }
  ]
}
