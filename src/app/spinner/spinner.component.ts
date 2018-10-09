import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() inputValue = 1;
  @Input() minValue = 1;
  @Input() maxValue: number;
  @Input() plusDisable: boolean;
  @Input() minusDisable: boolean;

  constructor() {
  }

  ngOnInit() {
    if (this.minValue == this.maxValue) {
      this.minusDisable = true;
      this.plusDisable = true;
    }
    if (this.minValue == this.inputValue) {
      this.minusDisable = true;
    }
    if (this.maxValue == this.inputValue) {
      this.plusDisable = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  clickPlus() {
    if (this.inputValue >= this.maxValue || this.plusDisable) {
      return;
    }
    this.inputValue++;
    if (this.inputValue == this.maxValue) {
      this.plusDisable = true;
    }
    this.minusDisable = false;
  }

  clickMinus() {
    if (this.inputValue <= this.minValue || this.minusDisable) {
      return;
    }
    this.inputValue--;
    if (this.inputValue == this.minValue) {
      this.minusDisable = true;
    }
    this.plusDisable = false;
  }

  onChange(newValue) {
    if (this.minValue >= newValue.target.value) {
      this.inputValue = this.minValue;
      this.plusDisable = false;
      this.minusDisable = true;
    } else if (this.maxValue && this.maxValue <= newValue.target.value) {
      this.inputValue = this.maxValue;
      this.plusDisable = true;
      this.minusDisable = false;
    } else {
      this.inputValue = newValue.target.value;
      this.plusDisable = false;
      this.minusDisable = false;
    }
  }

}
