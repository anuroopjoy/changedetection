import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';

@Component({
  selector: 'app-right-second',
  templateUrl: './right-second.component.html',
  styleUrls: ['./right-second.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSecondComponent implements OnChanges, DoCheck {
  style: { 'background-color': any; };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Right component 2 changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Right component 2 do check');
  }
}
