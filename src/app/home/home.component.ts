import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  creatureAsleep: string = "../../assets/sleepy.png";
  creatureAwake: string = "../../assets/awake.png";
  buttonClicked: boolean = false;

  ngOnInit(): void {
  }

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public async WakeUpLittleGuy(){
    this.creatureAsleep = this.creatureAwake;
    await this.delay(300);
    this.buttonClicked = true;
}



}
