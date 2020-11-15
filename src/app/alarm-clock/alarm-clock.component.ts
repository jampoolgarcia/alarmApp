import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.css']
})
export class AlarmClockComponent implements OnInit {

  @Input() startTime =10;
  @Input() messageToShow = "hi";

  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      if(this.startTime>0){
        this.startTime--;  
      }
    }, 100)
  }

}
