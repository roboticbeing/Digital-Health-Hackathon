import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  suggestions: Array<string> = ["Go for a walk", "Do yoga", "Meditate"]
  currentSuggestion: number = 0;
  buttonClicked: boolean = false;

  toggleSuggestion() {
    this.buttonClicked = true;
    // increment currentSuggestion until we reach the end of the array, then start from 0
    this.currentSuggestion = (this.currentSuggestion == this.suggestions.length - 1) ? 0 : this.currentSuggestion + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
