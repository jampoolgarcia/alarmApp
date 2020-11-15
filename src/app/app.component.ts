import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'alarmApp';
  seconds = 0;
  /*alarmMessage = "even sleeping the alarm does not sound..."*/
  alarmMessage = "get up it's time to work...."

  getRandomSeconds(){
    this.seconds = Math.trunc(Math.random()*60);
  }

}
