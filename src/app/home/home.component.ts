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

  ngOnInit(): void {
  }

  public SwapImage(){
    this.creatureAsleep = this.creatureAwake;
}

}
