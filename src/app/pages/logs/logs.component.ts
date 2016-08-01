import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'documentation',
  pipes: [],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./logs.scss')],
  template: require('./logs.html')
})
export class Logs {

  constructor() {
  }

}
