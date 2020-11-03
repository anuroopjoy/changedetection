import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { getRandomColor } from './color.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, DoCheck {
  style: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Main container changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Main container do check');
  }
  title = 'changeDetection';
}
