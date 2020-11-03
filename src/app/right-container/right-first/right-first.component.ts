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
  selector: 'app-right-first',
  templateUrl: './right-first.component.html',
  styleUrls: ['./right-first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightFirstComponent implements OnChanges, DoCheck {
  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Right component 1 changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Right component 1 do check');
  }
}
