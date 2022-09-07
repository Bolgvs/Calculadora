import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora';

  screenCalculator = '0';
  screenCalculatorOp = '0';
  screenCalculatorRes = '';

  opFinished = false;
  num1 = 0;
  num2 = 0;
  op = '';

  resetBtn() {
    this.screenCalculator = '0';
    this.screenCalculatorOp = '0';
    this.screenCalculatorRes = '';
    this.opFinished = false;
    this.num1 = 0;
    this.num2 = 0;
    this.op = '';
  }

  numberButtons(number: number) {
    if (this.opFinished) {
      this.resetBtn();
    }
    if (this.screenCalculator == '0') {
      this.screenCalculator = '' + number;
      if (this.screenCalculatorOp != '0') {
        this.screenCalculatorOp += number;
      } else {
        this.screenCalculatorOp = '' + number;
      }
    } else {
      this.screenCalculatorOp += number;
      this.screenCalculator += number;
    }
  }

  operators(op: string) {
    if (this.op == "") {
      switch (op) {
        case '+':
          this.op = '+';
          this.screenCalculatorOp += '+';
          break;
        case '-':
          this.op = '-';
          this.screenCalculatorOp += '-';
          break;
        case '*':
          this.op = '*';
          this.screenCalculatorOp += 'x';
          break;
        case '/':
          this.op = '/';
          this.screenCalculatorOp += '/';
          break;
      }

      this.num1 = parseFloat(this.screenCalculator);
      this.screenCalculator = '0';
    }
  }

  result() {
    this.num2 = parseFloat(this.screenCalculator);
    switch (this.op) {
      case '+':
        this.screenCalculatorRes =
          '' + Math.round(this.num1 + this.num2);
        break;
      case '-':
        this.screenCalculatorRes =
          '' + Math.round(this.num1 - this.num2);
        break;
      case '*':
        this.screenCalculatorRes =
          '' + Math.round(this.num1 * this.num2);
        break;
      case '/':
        if (this.num2 == 0) {
          this.screenCalculator = 'Error';
        } else {
          this.screenCalculatorRes =
            '' + Math.round(this.num1 / this.num2);
        }
        break;
    }
    this.opFinished = true;
  }
  comma() {
    let counter = 0;
    for (let index = 0; index < this.screenCalculator.length; index++) {
      const element = this.screenCalculator[index];
      if (element === '.') {
        counter++;
      }
    }
    if (counter == 0) {
      this.screenCalculatorOp += '.';
      this.screenCalculator += '.';
    }
  }
}
