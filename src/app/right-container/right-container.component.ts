import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { getRandomColor } from '../color.helper';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightContainerComponent implements OnChanges, DoCheck {
  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Right container changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Right container do check');
  }
}
