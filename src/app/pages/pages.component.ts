import {Component, ViewEncapsulation} from '@angular/core';
import {BaPageTop, BaContentTop, BaSidebar, BaBackTop} from '../theme/components';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://sovaj.org">Sovaj</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i><a href="https://www.facebook.com/sovaj.org/"></a></li>
          <li><i class="socicon socicon-twitter"></i><a href="https://twitter.com/sovaj_dot_org"></a></li>
          <li><i class="socicon socicon-github"><a href="https://github.com/sovaj"></a></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
