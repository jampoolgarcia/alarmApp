import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.css']
})
export class AlarmClockComponent implements OnInit {

  @Input() startTime;
  @Input() messageToShow = "hi";
  @Output() notification = new EventEmitter();
  sentMessage= false;
  @Input() alarmList;

  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      if(this.startTime == 0){
        if(this.sentMessage== false){
          this.notification.emit({time: this.startTime, message: "Hi..."})
          this.sentMessage= true;
        }
      }else{
        if(this.startTime>0){
          this.sentMessage= false;
          this.startTime--;  
        }else{
          this.startTime = "--";
        }
      }

      
    }, 100)
  }

}
