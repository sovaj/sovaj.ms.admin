import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'documentation',
  pipes: [],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./documentation.scss')],
  template: require('./documentation.html')
})
export class Documentation {

  constructor() {
  }

}
