import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left-first',
  templateUrl: './left-first.component.html',
  styleUrls: ['./left-first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftFirstComponent implements OnChanges, DoCheck, OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}
  @Output() dataEntered = new EventEmitter();
  name: any;
  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Left component 1 changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Left component 1 do check');
  }
  emitNewValue() {
    // this.dataEntered.emit(this.name);
    this.dataService.sendData(this.name);
  }
}
