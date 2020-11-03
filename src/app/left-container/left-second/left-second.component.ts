import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left-second',
  templateUrl: './left-second.component.html',
  styleUrls: ['./left-second.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSecondComponent implements OnChanges, DoCheck, OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    private dataService: DataService
  ) {}
  @Input() data: any;
  ngOnInit(): void {
    this.cdr.detach();
    Promise.resolve().then(() => {
      this.name = 'inside promise';
      this.cdr.detectChanges();
    });
    this.dataService.dataSource.subscribe((data) => {
      this.name = data;
      this.cdr.detectChanges()
    });
  }
  public name: string;
  style: { 'background-color': any };
  ngOnChanges(changes: SimpleChanges): void {
    this.name = this.data;
    console.log('Left component 2 changes');
  }
  ngDoCheck(): void {
    this.style = { 'background-color': getRandomColor() };
    console.log('Left component 2 do check');
  }
  clickButton() {
    setTimeout(() => {
      this.name = 'hello';
      this.cdr.detectChanges();
    });
  }
}
