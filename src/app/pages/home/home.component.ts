import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../theme/components';
import {ResponsiveTable} from './responsiveTable';

@Component({
  selector: 'home',
  pipes: [],
  directives: [ResponsiveTable, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home {

  constructor() {
  }

}
