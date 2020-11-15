import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'alarmApp';
  seconds = -1;
  alarmMessage = "get up it's time to work....";
  alarmClockArray = [];
  idList = 1;

  getRandomSeconds(){
    this.seconds = Math.trunc(Math.random()*60);
  }

  showWakeUpMessage(data){
    this.alarmMessage = `${data.message}, ${this.alarmMessage}`;
    this.alarmClockArray.push({id: this.idList, time: this.seconds, message: this.alarmMessage});
    this.seconds = data.time;
    this.idList++;

  }

}
