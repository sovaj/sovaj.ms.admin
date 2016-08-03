import {RouterConfig} from '@angular/router';
import {Home} from './home/home.component';
import {Pages} from './pages.component';
import {Configuration} from './configuration/configuration.component';
import {Documentation} from './documentation/documentation.component';
import {Logs} from './logs/logs.component';
import {Components} from './components/components.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'home',
        component: Home,
        data: {
          menu: {
            title: 'Monitoring',
            icon: 'ion-monitor',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'documentation',
        component: Documentation,
        data: {
          menu: {
            title: 'Documentation',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'logs',
        component: Logs,
        data: {
          menu: {
            title: 'Logs',
            icon: 'ion-navicon',
            selected: false,
            expanded: false,
            order: 200
          }
        }
      },
      {
       path: 'configuration',
        component: Configuration,
        data: {
          menu: {
            title: 'Configuration',
            icon: 'ion-wrench',
            selected: false,
            expanded: false,
            order: 600,
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Logout',
            url: '#/login',
            icon: 'ion-power',
            order: 500,
          }
        }
      }
    ]
  }
];
